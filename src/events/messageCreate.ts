import { Event } from "#struct";

export default Event.create("messageCreate", async (message) => {
	if (message.author.bot || message.channel.isDMBased()) return;

	const db = (await client.db.guild.findFirst({ where: { id: message.guild!.id } }))!;

	const prefix = db.prefixes.find((prefix) => message.content.startsWith(prefix));

	(args = message.content.slice(prefix.length).trim().split(/ +/g)), (command = args.shift()!.toLowerCase());

	client.commands.get(command)!.messageRun(message, args);
});
