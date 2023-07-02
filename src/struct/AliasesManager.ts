import { Collection } from "discord.js";
import type { CommandManager } from "./CommandManager.js";

export class AliasesManager extends Collection<string, string> {
	public constructor(public commands: CommandManager) {
		super();
	}

	public resolveCommand(name: string) {
		return this.commands.get(name) || this.commands.get(this.get(name)!);
	}

	public isAlias(name: string) {
		return this.has(name);
	}
}
