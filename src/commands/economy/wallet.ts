import { Command } from "#struct";
import { EmbedBuilder } from "discord.js";

export default Command.create(
	{
		name: "balance",
		description: "Check a specified user's in-game balance.",
		category: "Economy",
		application: {
			enabled: ["User", "ChatInput"],
		},
	},
	{
		messageRun(message, args) {},
	},
);
