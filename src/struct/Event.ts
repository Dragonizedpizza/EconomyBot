import { s } from "@sapphire/shapeshift";
import type { ClientEvents } from "discord.js";
import type { Client, Constructor } from "#util";

export type EventKeys = keyof ClientEvents;

export class Event<EventName extends EventKeys = EventKeys> {
	public client: Client;

	public name: string;
	public once: boolean;
	public enabled: boolean;
	public run!: (...args: ClientEvents[EventName]) => any;

	public constructor(
		name: string,
		options: {
			client: Client;
			once?: boolean;
			enabled?: boolean;
			run(...args: ClientEvents[EventName]): any;
		},
	) {
		/**
		 * The client.
		 * @type {Client}
		 */

		this.client = options.client;

		/**
		 * Event name.
		 * @type {String}
		 */
		this.name = name;

		/**
		 * Whether the event occurs once.
		 * @type {Boolean}
		 */

		this.once = s.boolean.parse(options.once) ?? false;

		/**
		 * Whether the event is enabled.
		 * @type {Boolean}
		 */

		this.enabled = s.boolean.parse(options.enabled) ?? true;

		/**
		 * Function to run once the event occurs.
		 * @type {((...args: ClientEvents[EventName]) => any)}
		 */

		this.run = options.run;
	}

	public listen() {
		this.client[this.once ? "once" : "on"](this.name, this.run as any);
	}

	public stop() {
		this.client.removeAllListeners(this.name);
	}

	public static create<EventName extends EventKeys>(
		name: EventName,
		exec: (...args: ClientEvents[EventName]) => any,
		opt: { once?: boolean; enabled?: boolean } = {},
	): Constructor<Event<EventName>> {
		return class extends Event<EventName> {
			public constructor(client: Client) {
				super(name, { ...opt, client, run: exec });
			}
		};
	}
}
