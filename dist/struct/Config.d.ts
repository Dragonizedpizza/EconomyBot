import type { ConfigOptions } from "#util";
export declare class Config {
	token: string;
	dbUrl: string;
	defaultPrefixes: string[];
	ownerIds: string[];
	_ready: Promise<boolean>;
	ready: boolean;
	constructor(config: ConfigOptions);
	set<K extends keyof ConfigOptions>(key: K, value: ConfigOptions[K]): this;
	clear(): void;
	setDatabaseURL(): Promise<boolean>;
}
//# sourceMappingURL=Config.d.ts.map
