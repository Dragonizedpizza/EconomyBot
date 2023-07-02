import { Message } from "discord.js";
declare const _default: {
	new (client: import("#struct").Client): {
		client: import("#struct").Client;
		name: string;
		aliases: string[];
		description: string;
		application?:
			| import("@sapphire/shapeshift").UndefinedToOptional<{
					enabled: ("User" | "Message" | "ChatInput")[];
					chatInputOptions:
						| import("@sapphire/shapeshift").UndefinedToOptional<
								{
									type: any;
									name: any;
									description: any;
									autocomplete: any;
									required: any;
									choices: any;
									channelTypes: any;
									minValue: any;
									maxValue: any;
									minLength: any;
									maxLength: any;
								} & {
									options: any;
								}
						  >[]
						| undefined;
					userOptions:
						| import("@sapphire/shapeshift").UndefinedToOptional<
								{
									type: any;
									name: any;
									description: any;
									autocomplete: any;
									required: any;
									choices: any;
									channelTypes: any;
									minValue: any;
									maxValue: any;
									minLength: any;
									maxLength: any;
								} & {
									options: any;
								}
						  >[]
						| undefined;
					messageOptions:
						| import("@sapphire/shapeshift").UndefinedToOptional<
								{
									type: any;
									name: any;
									description: any;
									autocomplete: any;
									required: any;
									choices: any;
									channelTypes: any;
									minValue: any;
									maxValue: any;
									minLength: any;
									maxLength: any;
								} & {
									options: any;
								}
						  >[]
						| undefined;
			  }>
			| undefined;
		category: "General" | "Fun" | "Utility" | "Economy" | "Owner";
		cooldown: import("../../util/Constants.js").CommandCooldown;
		ownerOnly: boolean;
		allowedMediums: ("DM" | "GuildChannel" | "VoiceChannel")[];
		nsfw: boolean;
		permissions: import("../../util/Constants.js").CommandPermissions;
		messageRun(message: Message<boolean>, args: string[]): any;
		slashRun(
			interaction: import("discord.js").CommandInteraction<import("discord.js").CacheType>,
			options: import("../../util/Constants.js").InteractionOptionResolver,
		): any;
		userContextRun(
			interaction: import("discord.js").UserContextMenuCommandInteraction<import("discord.js").CacheType>,
			options: import("../../util/Constants.js").InteractionOptionResolver,
		): any;
		messageContextRun(
			interaction: import("discord.js").MessageContextMenuCommandInteraction<import("discord.js").CacheType>,
			options: import("../../util/Constants.js").InteractionOptionResolver,
		): any;
	};
	create(options: import("../../util/Constants.js").CommandOptions, runMethods: import("#struct").RunMethods): any;
};
export default _default;
//# sourceMappingURL=ping.d.ts.map
