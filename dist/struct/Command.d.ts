import type { Client } from "#struct";
import type {
	CommandOptions,
	CommandPermissions,
	CommandCategoriesUnion,
	CommandMediumsUnion,
	CommandCooldown,
	ApplicationCommandOptions,
	InteractionOptionResolver,
} from "#util";
import type { Message, CommandInteraction, UserContextMenuCommandInteraction, MessageContextMenuCommandInteraction } from "discord.js";
export interface RunMethods {
	messageRun?: Command["messageRun"];
	slashRun?: Command["slashRun"];
	userContextRun?: Command["userContextRun"];
	messageContextRun?: Command["messageContextRun"];
}
export declare class Command {
	client: Client;
	name: string;
	aliases: string[];
	description: string;
	application?: ApplicationCommandOptions;
	category: CommandCategoriesUnion;
	cooldown: CommandCooldown;
	ownerOnly: boolean;
	allowedMediums: CommandMediumsUnion[];
	nsfw: boolean;
	permissions: CommandPermissions;
	constructor(client: Client, options: CommandOptions);
	messageRun(message: Message, args: string[]): any;
	slashRun(interaction: CommandInteraction, options: InteractionOptionResolver): any;
	userContextRun(interaction: UserContextMenuCommandInteraction, options: InteractionOptionResolver): any;
	messageContextRun(interaction: MessageContextMenuCommandInteraction, options: InteractionOptionResolver): any;
	static create(
		options: CommandOptions,
		runMethods: RunMethods,
	): {
		new (client: Client): {
			client: Client;
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
			cooldown: CommandCooldown;
			ownerOnly: boolean;
			allowedMediums: ("DM" | "GuildChannel" | "VoiceChannel")[];
			nsfw: boolean;
			permissions: CommandPermissions;
			messageRun(message: Message<boolean>, args: string[]): any;
			slashRun(interaction: CommandInteraction<import("discord.js").CacheType>, options: InteractionOptionResolver): any;
			userContextRun(interaction: UserContextMenuCommandInteraction<import("discord.js").CacheType>, options: InteractionOptionResolver): any;
			messageContextRun(
				interaction: MessageContextMenuCommandInteraction<import("discord.js").CacheType>,
				options: InteractionOptionResolver,
			): any;
		};
		create(options: CommandOptions, runMethods: RunMethods): any;
	};
}
//# sourceMappingURL=Command.d.ts.map
