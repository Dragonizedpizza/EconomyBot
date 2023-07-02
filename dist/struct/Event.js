import { s } from "@sapphire/shapeshift";
export class Event {
	client;
	name;
	once;
	enabled;
	run;
	constructor(name, options) {
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
	listen() {
		this.client[this.once ? "once" : "on"](this.name, this.run);
	}
	stop() {
		this.client.removeAllListeners(this.name);
	}
	static create(name, exec, opt = {}) {
		return class extends Event {
			constructor(client) {
				super(name, { ...opt, client, run: exec });
			}
		};
	}
}
//# sourceMappingURL=Event.js.map
