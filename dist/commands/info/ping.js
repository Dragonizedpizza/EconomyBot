import { Command } from "#struct";
import { Message, bold, inlineCode, time } from "discord.js";
export default Command.create(
	{
		name: "ping",
		description: "Pong!",
		category: "General",
		application: {
			enabled: ["ChatInput"],
		},
	},
	{
		async messageRun(message) {
			const sent = await message.reply("Pinging...");
			sent.edit(
				[
					"Pong!",
					"",
					`${bold("API Latency")}: ${inlineCode(String(Math.round(client.ws.ping)))}ms`,
					`${bold("Message Latency")}: ${inlineCode(Math.round(sent.createdTimestamp - message.createdTimestamp).toString())}ms`,
					"",
					"API latency is the time taken by the bot to receive a heartbeat acknowledgement.",
					"Message latency is the time taken by the bot to send a message.",
					`You initiated this command ${time(message.createdTimestamp, "R")}, and I replied ${time(sent.createdTimestamp, "R")}.`,
				].join("\n"),
			);
		},
		async slashRun(interaction) {
			const reply = await interaction.reply("Pong!");
			await interaction.editReply(
				[
					"Pong!",
					"",
					`${bold("API Latency")}: ${inlineCode(String(Math.round(client.ws.ping)))}ms`,
					`${bold("Message Latency")}: ${inlineCode(Math.round(reply.createdTimestamp - interaction.createdTimestamp).toString())}ms`,
					"",
					"API latency is the time taken by the bot to receive a heartbeat acknowledgement.",
					"Message latency is the time taken by the bot to send a message.",
					`You initiated this command ${time(interaction.createdTimestamp, "R")}, and I replied ${time(reply.createdTimestamp, "R")}.`,
				].join("\n"),
			);
		},
	},
);
//# sourceMappingURL=ping.js.map
