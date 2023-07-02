import { Collection } from "discord.js";
import type { Event, Client } from "#struct";
export declare class EventManager extends Collection<string, Event> {
	client: Client;
	constructor(client: Client);
	stop(name: string): void;
	stopAll(): void;
}
//# sourceMappingURL=EventManager.d.ts.map
