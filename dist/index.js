import { Client } from "#struct";
const client = new Client({
	paths: {
		commands: "./src/commands",
		events: "./src/events",
		config: "./src/config.js",
	},
});
await client.init();
Object.defineProperty(global, "client", {
	value: client,
	enumerable: false,
});
//# sourceMappingURL=index.js.map
