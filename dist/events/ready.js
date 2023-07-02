import { Event } from "#struct";
export default Event.create("ready", () => {
	client.logger.info(`Logged in as ${client.user.tag}`);
});
//# sourceMappingURL=ready.js.map
