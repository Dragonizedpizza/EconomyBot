import { Client as BaseClient, GatewayIntentBits as Intents } from "discord.js";
import { LoadManager, CommandManager, EventManager, Config } from "#struct";
import { Sequelize } from "sequelize";
import { readFile } from "node:fs/promises";
import Logger from "./Logger.js";
export class Client extends BaseClient {
	db;
	paths;
	loader;
	commands;
	events;
	config;
	logger = Logger;
	constructor({ paths, clientOptions }) {
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
	async initConfig() {
		this.config = this.paths.config.endsWith(".json")
			? JSON.parse(await readFile(this.paths.config, { encoding: "utf-8" }))
			: (await import(this.paths.config)).default;
	}
}
//# sourceMappingURL=Client.js.map
