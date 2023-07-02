import type { ClientEvents } from "discord.js";
import type { Client, Constructor } from "#util";
export type EventKeys = keyof ClientEvents;
export declare class Event<EventName extends EventKeys = EventKeys> {
	client: Client;
	name: string;
	once: boolean;
	enabled: boolean;
	run: (...args: ClientEvents[EventName]) => any;
	constructor(
		name: string,
		options: {
			client: Client;
			once?: boolean;
			enabled?: boolean;
			run(...args: ClientEvents[EventName]): any;
		},
	);
	listen(): void;
	stop(): void;
	static create<EventName extends EventKeys>(
		name: EventName,
		exec: (...args: ClientEvents[EventName]) => any,
		opt?: {
			once?: boolean;
			enabled?: boolean;
		},
	): Constructor<Event<EventName>>;
}
//# sourceMappingURL=Event.d.ts.map
