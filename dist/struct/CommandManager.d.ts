import { Collection } from "discord.js";
import { AliasesManager } from "./AliasesManager.js";
import type { Client, Command } from "#struct";
export declare class CommandManager extends Collection<string, Command> {
	client: Client;
	aliases: AliasesManager;
	constructor(client: Client);
	resolveCommand(name: string): Command | undefined;
	is(name: string): "Command" | "Alias" | null;
}
//# sourceMappingURL=CommandManager.d.ts.map
