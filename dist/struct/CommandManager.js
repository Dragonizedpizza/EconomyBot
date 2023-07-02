import { Collection } from "discord.js";
import { AliasesManager } from "./AliasesManager.js";
export class CommandManager extends Collection {
	client;
	aliases;
	constructor(client) {
		super();
		this.client = client;
		this.aliases = new AliasesManager(this);
	}
	resolveCommand(name) {
		return this.get(name) || this.get(this.aliases.get(name));
	}
	is(name) {
		return this.has(name) ? "Command" : this.aliases.has(name) ? "Alias" : null;
	}
}
//# sourceMappingURL=CommandManager.js.map
