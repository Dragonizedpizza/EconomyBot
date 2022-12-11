import { Collection } from "discord.js";
import { AliasesManager } from "./AliasesManager";
import type { Client, Command } from "#struct";

export class CommandManager extends Collection<string, Command> {
	public aliases: AliasesManager;

	public constructor(public client: Client) {
		super();

		this.aliases = new AliasesManager(this);
	}

	public resolveCommand(name: string) {
		return this.get(name) || this.get(this.aliases.get(name)!);
	}

	public is(name: string) {
		return this.has(name) ? "Command" : this.aliases.has(name) ? "Alias" : null;
	}
}
