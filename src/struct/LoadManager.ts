import { CommandManager, EventManager, type Client } from "#struct";
import { opendir } from "fs/promises";
import { join } from "path";

export class LoadManager {
	public constructor(public client: Client) {
		client.commands = new CommandManager(client);
		client.events = new EventManager(client);
	}

	public async *getJSFiles(dir: string) {
		for await (const dirent of await opendir(dir)) {
			if (dirent.isFile() && !dirent.name.includes(".ignore") && dirent.name.endsWith(".js")) yield join(dir, dirent.name);
			else await this.getJSFiles(join(dir, dirent.name));
		}
	}

	public async loadCommands(dir: string) {
		this.client.commands.clear();
		this.client.commands.aliases.clear();

		for await (const file of this.getJSFiles(dir)) {
			const { default: Command } = await import(file),
				command = new Command(this.client);

			this.client.commands.set(command.name, command);

			for (const alias of command.aliases) this.client.commands.aliases.set(alias, command.name);
		}

		return this.client.commands;
	}

	public async loadEvents(dir: string) {
		this.client.events.clear();

		for await (const file of this.getJSFiles(dir)) {
			const { default: Event } = await import(file),
				event = new Event(this.client);

			this.client.events.set(event.name, event);
			event.listen();
		}

		return this.client.events;
	}
}
