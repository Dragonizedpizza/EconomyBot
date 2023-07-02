import { CommandManager, EventManager, type Client } from "#struct";
export declare class LoadManager {
	client: Client;
	constructor(client: Client);
	getJSFiles(dir: string): AsyncGenerator<string, void, unknown>;
	loadCommands(dir: string): Promise<CommandManager>;
	loadEvents(dir: string): Promise<EventManager>;
}
//# sourceMappingURL=LoadManager.d.ts.map
