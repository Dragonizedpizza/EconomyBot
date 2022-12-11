import { Event } from "#struct";

export default Event.create("debug", (info) => {
	client.logger.debug(info);
});
