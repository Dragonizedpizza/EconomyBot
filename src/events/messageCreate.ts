import { Event } from "#struct";

export default Event.create("messageCreate", (message) => {
	if (message.author.bot) return;

	if (!client.config.prefixes.some((prefix) => message.content.startsWith(prefix))) return;

	const prefix = client.config.prefixes.find((prefix) => message.content.startsWith(prefix))!,
		args = message.content.slice(prefix.length).trim().split(/ +/g),
		command = args.shift()!.toLowerCase();

	client.commands.get(command)!.messageRun(message, args);
});
