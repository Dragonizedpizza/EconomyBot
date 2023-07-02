import { Collection } from "discord.js";
export class AliasesManager extends Collection {
	commands;
	constructor(commands) {
		super();
		this.commands = commands;
	}
	resolveCommand(name) {
		return this.commands.get(name) || this.commands.get(this.get(name));
	}
	isAlias(name) {
		return this.has(name);
	}
}
//# sourceMappingURL=AliasesManager.js.map
