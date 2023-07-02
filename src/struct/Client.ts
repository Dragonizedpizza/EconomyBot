import { Client as BaseClient, GatewayIntentBits as Intents } from "discord.js";
import { LoadManager, CommandManager, EventManager, Config } from "#struct";
import { Sequelize } from "sequelize";
import { readFile } from "node:fs/promises";
import Logger from "./Logger.js";
import type { ClientOptions, ClientPaths } from "#util";

export class Client extends BaseClient {
	public db: Sequelize;
	public paths: ClientPaths;
	public loader: LoadManager;
	public commands!: CommandManager;
	public events!: EventManager;
	public config!: Config;
	public logger = Logger;

	public constructor({ paths, clientOptions }: ClientOptions) {
		super(
			clientOptions ?? {
				intents: [Intents.GuildMessages, Intents.MessageContent, Intents.Guilds, Intents.GuildMembers],
			},
		);

		this.db = new Sequelize({
			dialect: "sqlite",
			storage: "./db.sqlite",
		});
		this.loader = new LoadManager(this);
		this.paths = paths;
		this.initConfig().then(() => this.init());
	}

	async init() {
		await this.loader.loadCommands(this.paths.commands);
		await this.loader.loadEvents(this.paths.events);
		await this.login(this.config.token);
	}

	public async initConfig() {
		this.config = this.paths.config.endsWith(".json")
			? JSON.parse(await readFile(this.paths.config, { encoding: "utf-8" }))
			: (await import(this.paths.config)).default;
	}
}
