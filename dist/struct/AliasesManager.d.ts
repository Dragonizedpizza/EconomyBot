import { Collection } from "discord.js";
import type { CommandManager } from "./CommandManager.js";
export declare class AliasesManager extends Collection<string, string> {
	commands: CommandManager;
	constructor(commands: CommandManager);
	resolveCommand(name: string): import("./Command.js").Command | undefined;
	isAlias(name: string): boolean;
}
//# sourceMappingURL=AliasesManager.d.ts.map
