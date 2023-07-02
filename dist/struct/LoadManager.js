import { CommandManager, EventManager } from "#struct";
import { opendir } from "fs/promises";
import { join } from "path";
export class LoadManager {
	client;
	constructor(client) {
		this.client = client;
		client.commands = new CommandManager(client);
		client.events = new EventManager(client);
	}
	async *getJSFiles(dir) {
		for await (const dirent of await opendir(dir)) {
			if (dirent.isFile() && !dirent.name.includes(".ignore") && dirent.name.endsWith(".js")) yield join(dir, dirent.name);
			else await this.getJSFiles(join(dir, dirent.name));
		}
	}
	async loadCommands(dir) {
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
	async loadEvents(dir) {
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
//# sourceMappingURL=LoadManager.js.map
