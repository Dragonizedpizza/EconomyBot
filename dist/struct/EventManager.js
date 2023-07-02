import { Collection } from "discord.js";
export class EventManager extends Collection {
	client;
	constructor(client) {
		super();
		this.client = client;
	}
	stop(name) {
		this.client.removeAllListeners(name);
	}
	stopAll() {
		this.client.removeAllListeners();
	}
}
//# sourceMappingURL=EventManager.js.map
