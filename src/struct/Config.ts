import { s } from "@sapphire/shapeshift";
import { readFile, writeFile } from "fs/promises";
import Logger from "./Logger.js";
import type { ConfigOptions } from "#util";

export class Config {
	public token: string;
	public dbUrl: string;
	public defaultPrefixes: string[];
	public ownerIds: string[];
	public _ready: Promise<boolean>;
	public ready: boolean;

	public constructor(config: ConfigOptions) {
		this.token = s.string.parse(config.token);
		this.dbUrl = s.string.parse(config.dbUrl);
		this.defaultPrefixes = s.string.array.parse(config.defaultPrefixes);
		this.ownerIds = s.string.array.parse(config.ownerIds);
		this._ready = this.setDatabaseURL();
		this.ready = false;

		this._ready.then(() => {
			this.ready = true;

			Logger.info("Updated the .env file.");
			Logger.info("Config is ready.");
		});
	}

	public set<K extends keyof ConfigOptions>(key: K, value: ConfigOptions[K]) {
		this[key] = <any>value;

		return this;
	}

	public clear() {
		this.token = "";
		this.defaultPrefixes = [];
		this.ownerIds = [];
	}

	async setDatabaseURL() {
		const lines = (await readFile("./.env", { encoding: "utf8" })).split("\n"),
			dbIndex = lines.findIndex((line) => line.startsWith("DATABASE_URL="));

		lines[dbIndex] = `DATABASE_URL=${this.dbUrl}`;

		await writeFile("./.env", lines.join("\n"), { encoding: "utf-8" });

		return true;
	}
}
