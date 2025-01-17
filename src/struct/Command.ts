import { s } from "@sapphire/shapeshift";
import { CommandMediums, Validators } from "#util";
import type { Client } from "#struct";
import type {
	CommandOptions,
	CommandPermissions,
	CommandCategoriesUnion,
	CommandMediumsUnion,
	CommandCooldown,
	ApplicationCommandOptions,
	MessageCommandOptions,
	Mutable,
	InteractionOptionResolver,
} from "#util";
import type { Message, CommandInteraction, UserContextMenuCommandInteraction, MessageContextMenuCommandInteraction } from "discord.js";

export interface RunMethods {
	messageRun?: Command["messageRun"];
	slashRun?: Command["slashRun"];
	userContextRun?: Command["userContextRun"];
	messageContextRun?: Command["messageContextRun"];
	messageSubCommands?: Record<string, Command["messageRun"]>;
	slashSubCommands?: Record<string, Command["slashRun"]>;
	userContextSubCommands?: Record<string, Command["userContextRun"]>;
	messageContextSubCommands?: Record<string, Command["messageContextRun"]>;
}

export class Command {
	public client: Client;

	public name: string;
	public aliases: string[];
	public description: string;
	public category: CommandCategoriesUnion;
	public cooldown: CommandCooldown;
	public ownerOnly: boolean;
	public allowedMediums: CommandMediumsUnion[] = [];
	public nsfw: boolean;
	public permissions: CommandPermissions;
	public applicationCommand?: ApplicationCommandOptions;
	public messageCommand?: MessageCommandOptions;
	public messageSubCommands?: Record<string, Command["messageRun"]>;
	public slashSubCommands?: Record<string, Command["slashRun"]>;
	public userContextSubCommands?: Record<string, Command["userContextRun"]>;
	public messageContextSubCommands?: Record<string, Command["messageContextRun"]>;

	constructor(client: Client, options: CommandOptions) {
		this.client = client;

		this.name = s.string.lengthLessThanOrEqual(32).parse(options.name);
		this.aliases = s.string.lengthLessThanOrEqual(32).array.parse(options.aliases);
		this.description = s.string.lengthLessThanOrEqual(32).parse(options.description);
		this.category = <any>Validators.commandCategory.parse(options.category);
		this.cooldown = Validators.commandCooldown.parse(options.cooldown ?? { runnable: 1, every: 2000 });
		this.ownerOnly = s.boolean.parse(options.ownerOnly ?? false);
		this.nsfw = s.boolean.parse(options.nsfw ?? false);
		this.permissions = <any>Validators.commandPermissions.parse(options.permissions ?? { user: [], self: [] });
		this.applicationCommand = Validators.applicationCommand.parse(options.applicationCommand);
		this.messageCommand = Validators.messageCommand.parse(options.messageCommand);
		if (options.allowedMediums === "All") this.allowedMediums = <any>CommandMediums;
		else this.allowedMediums = <Mutable<typeof CommandMediums>>(<any>Validators.commandMedium.parse(options.allowedMediums ?? ["Guild"]));
	}

	public messageRun(message: Message, args: string[]): any;
	public async messageRun(message: Message) {
		await message.reply("This command doesn't provide a run method.");

		throw new Error(`Command ${this.name} doesn't provide a run method.`);
	}

	public slashRun(interaction: CommandInteraction, options: InteractionOptionResolver): any;
	public async slashRun(interaction: CommandInteraction) {
		await interaction.reply({ content: "This command doesn't provide a run method.", ephemeral: true });

		throw new Error(`Command ${this.name} doesn't provide a chatInputRun method.`);
	}

	public userContextRun(interaction: UserContextMenuCommandInteraction, options: InteractionOptionResolver): any;
	public async userContextRun(interaction: UserContextMenuCommandInteraction) {
		await interaction.reply({ content: "This command doesn't provide a run method.", ephemeral: true });

		throw new Error(`Command ${this.name} doesn't provide a userContextRun method.`);
	}

	public messageContextRun(interaction: MessageContextMenuCommandInteraction, options: InteractionOptionResolver): any;
	public async messageContextRun(interaction: MessageContextMenuCommandInteraction) {
		await interaction.reply({ content: "This command doesn't provide a run method.", ephemeral: true });

		throw new Error(`Command ${this.name} doesn't provide a messageContextRun method.`);
	}

	public static create(options: CommandOptions, runMethods: RunMethods) {
		return class extends Command {
			constructor(client: Client) {
				super(client, options);

				for (const key of <(keyof RunMethods)[]>Object.keys(runMethods)) this[key] = <any>runMethods[key];
			}
		};
	}
}
