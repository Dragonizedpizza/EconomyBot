import { s } from "@sapphire/shapeshift";
import { GatewayIntentBits } from "discord.js";
import { CommandMediums } from "./Constants";
import { ApplicationCommandType, ApplicationCommandOptionType, ChannelType } from "discord-api-types/v10";

export const permission = s.enum(Object.keys(GatewayIntentBits)).array;

export const commandCooldown = s.object({ runnable: s.number, every: s.number });
export const commandPermissions = s.object({ user: permission, self: permission });
export const commandMedium = s.enum(CommandMediums).array;

export const baseApplicationCommandOption = s.object({
	type: s.enum(Object.keys(ApplicationCommandOptionType)),
	name: s.string.lengthLessThanOrEqual(32),
	description: s.string,
	autocomplete: s.boolean.default(false),
	required: s.boolean.default(false),
	choices: s.object({ name: s.string, value: s.any }).array.optional,
	channelTypes: s.enum(Object.keys(ChannelType)).array.optional,
	minValue: s.number.optional,
	maxValue: s.number.optional,
	minLength: s.number,
	maxLength: s.number,
});
export const applicationCommandOption = baseApplicationCommandOption.extend({
	options: baseApplicationCommandOption.array.optional,
});
export const applicationCommand = s.object({
	enabled: s.enum(<(keyof typeof ApplicationCommandType)[]>Object.keys(ApplicationCommandType)).array,
	chatInputOptions: applicationCommandOption.array.optional,
	userOptions: applicationCommandOption.array.optional,
	messageOptions: applicationCommandOption.array.optional,
});
