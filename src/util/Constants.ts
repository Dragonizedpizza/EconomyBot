import type {
	ClientOptions as DiscordClientOptions,
	PermissionsString,
	// ApplicationCommandOptionData,
	CommandInteractionOptionResolver,
} from "discord.js";
import type { applicationCommand, applicationCommandOption } from "./Validators";
import type { InferType } from "@sapphire/shapeshift";

import { Client as ModifiedClient } from "#struct";
export { ModifiedClient as Client };

export type Path = string;
export type Mutable<T> = { -readonly [P in keyof T]: T[P] extends ReadonlyArray<infer U> ? U[] : T[P] };
export type Constructor<T> = { new (...args: never[]): T };

export type InteractionOptionResolver = Omit<CommandInteractionOptionResolver, "getMessage" | "getFocused">;

export interface ConfigOptions {
	token: string;
	dbUrl: string;
	defaultPrefixes: string[];
	ownerIds: string[];
}

export type ApplicationCommandOptionData = InferType<typeof applicationCommandOption>;
export type ApplicationCommandOptions = InferType<typeof applicationCommand>;

export interface ClientOptions {
	paths: ClientPaths;
	clientOptions?: DiscordClientOptions;
}

export interface ClientPaths {
	config: Path;
	commands: Path;
	events: Path;
}

export const CommandCategories = ["General", "Fun", "Utility", "Economy", "Owner"] as const;
export type CommandCategoriesUnion = typeof CommandCategories[number];

export const CommandMediums = ["DM", "GuildChannel", "VoiceChannel"] as const;
export type CommandMediumsUnion = typeof CommandMediums[number];

export interface CommandPermissions {
	user: PermissionsString;
	self: PermissionsString;
}

/**
 * Command cooldown object
 * @type {Object}
 * @property {number} runnable - The number of times the command can be run
 * @property {number} every - The timeframe in which this limit resets
 */

export interface CommandCooldown {
	runnable: number;
	every: number;
}

export interface CommandOptions {
	name: string;
	description: string;
	category: CommandCategoriesUnion;
	application: ApplicationCommandOptions;
	aliases?: string[];
	cooldown?: CommandCooldown;
	ownerOnly?: boolean;
	allowedMediums?: CommandMediumsUnion[] | "All";
	nsfw?: boolean;
	permissions?: CommandPermissions;
}

declare module 'discord.js' {
	type Client = typeof ModifiedClient;
}
