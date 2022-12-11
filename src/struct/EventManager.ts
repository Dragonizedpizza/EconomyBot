import { Collection } from "discord.js";
import type { Event, Client } from "#struct";

export class EventManager extends Collection<string, Event> {
	public constructor(public client: Client) {
		super();
	}

	stop(name: string) {
		this.client.removeAllListeners(name);
	}

	stopAll() {
		this.client.removeAllListeners();
	}
}
