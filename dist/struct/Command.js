import { s } from "@sapphire/shapeshift";
import { CommandCategories, CommandMediums, Validators } from "#util";
export class Command {
	client;
	name;
	aliases;
	description;
	application;
	category;
	cooldown;
	ownerOnly;
	allowedMediums = [];
	nsfw;
	permissions;
	constructor(client, options) {
		this.client = client;
		this.name = s.string.lengthLessThanOrEqual(32).parse(options.name);
		this.aliases = s.string.lengthLessThanOrEqual(32).array.parse(options.aliases);
		this.description = s.string.lengthLessThanOrEqual(32).parse(options.description);
		this.category = s.enum(CommandCategories).parse(options.category);
		this.cooldown = Validators.commandCooldown.parse(options.cooldown ?? { runnable: 1, every: 2000 });
		this.ownerOnly = s.boolean.parse(options.ownerOnly ?? false);
		this.nsfw = s.boolean.parse(options.nsfw ?? false);
		this.permissions = Validators.commandPermissions.parse(options.permissions ?? { user: [], self: [] });
		this.application = Validators.applicationCommand.parse(options.application);
		if (options.allowedMediums === "All") this.allowedMediums = CommandMediums;
		else this.allowedMediums = Validators.commandMedium.parse(options.allowedMediums ?? ["Guild"]);
	}
	async messageRun(message) {
		await message.reply("This command doesn't provide a run method.");
		throw new Error(`Command ${this.name} doesn't provide a run method.`);
	}
	async slashRun(interaction) {
		await interaction.reply({ content: "This command doesn't provide a run method.", ephemeral: true });
		throw new Error(`Command ${this.name} doesn't provide a chatInputRun method.`);
	}
	async userContextRun(interaction) {
		await interaction.reply({ content: "This command doesn't provide a run method.", ephemeral: true });
		throw new Error(`Command ${this.name} doesn't provide a userContextRun method.`);
	}
	async messageContextRun(interaction) {
		await interaction.reply({ content: "This command doesn't provide a run method.", ephemeral: true });
		throw new Error(`Command ${this.name} doesn't provide a messageContextRun method.`);
	}
	static create(options, runMethods) {
		return class extends Command {
			constructor(client) {
				super(client, options);
				for (const key of Object.keys(runMethods)) this[key] = runMethods[key];
			}
		};
	}
}
//# sourceMappingURL=Command.js.map
