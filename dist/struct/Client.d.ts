import { Client as BaseClient } from "discord.js";
import { LoadManager, CommandManager, EventManager, Config } from "#struct";
import { Sequelize } from "sequelize";
import type { ClientOptions, ClientPaths } from "#util";
export declare class Client extends BaseClient {
	db: Sequelize;
	paths: ClientPaths;
	loader: LoadManager;
	commands: CommandManager;
	events: EventManager;
	config: Config;
	logger: import("winston").Logger;
	constructor({ paths, clientOptions }: ClientOptions);
	init(): Promise<void>;
	initConfig(): Promise<void>;
}
//# sourceMappingURL=Client.d.ts.map
