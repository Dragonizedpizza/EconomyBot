export declare const permission: import("@sapphire/shapeshift").ArrayValidator<string[][], string[]>;
export declare const commandCooldown: import("@sapphire/shapeshift").ObjectValidator<
	{
		runnable: number;
		every: number;
	},
	import("@sapphire/shapeshift").UndefinedToOptional<{
		runnable: number;
		every: number;
	}>
>;
export declare const commandPermissions: import("@sapphire/shapeshift").ObjectValidator<
	{
		user: string[][];
		self: string[][];
	},
	import("@sapphire/shapeshift").UndefinedToOptional<{
		user: string[][];
		self: string[][];
	}>
>;
export declare const commandMedium: import("@sapphire/shapeshift").ArrayValidator<
	(readonly ["DM", "GuildChannel", "VoiceChannel"])[],
	readonly ["DM", "GuildChannel", "VoiceChannel"]
>;
export declare const baseApplicationCommandOption: import("@sapphire/shapeshift").ObjectValidator<
	{
		type: string[];
		name: string;
		description: string;
		autocomplete: boolean;
		required: boolean;
		choices:
			| import("@sapphire/shapeshift").UndefinedToOptional<{
					name: any;
					value: any;
			  }>[]
			| undefined;
		channelTypes: string[][] | undefined;
		minValue: number | undefined;
		maxValue: number | undefined;
		minLength: number;
		maxLength: number;
	},
	import("@sapphire/shapeshift").UndefinedToOptional<{
		type: string[];
		name: string;
		description: string;
		autocomplete: boolean;
		required: boolean;
		choices:
			| import("@sapphire/shapeshift").UndefinedToOptional<{
					name: any;
					value: any;
			  }>[]
			| undefined;
		channelTypes: string[][] | undefined;
		minValue: number | undefined;
		maxValue: number | undefined;
		minLength: number;
		maxLength: number;
	}>
>;
export declare const applicationCommandOption: import("@sapphire/shapeshift").ObjectValidator<
	{
		type: string[];
		name: string;
		description: string;
		autocomplete: boolean;
		required: boolean;
		choices:
			| import("@sapphire/shapeshift").UndefinedToOptional<{
					name: any;
					value: any;
			  }>[]
			| undefined;
		channelTypes: string[][] | undefined;
		minValue: number | undefined;
		maxValue: number | undefined;
		minLength: number;
		maxLength: number;
	} & {
		options:
			| import("@sapphire/shapeshift").UndefinedToOptional<{
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
			  }>[]
			| undefined;
	},
	import("@sapphire/shapeshift").UndefinedToOptional<
		{
			type: string[];
			name: string;
			description: string;
			autocomplete: boolean;
			required: boolean;
			choices:
				| import("@sapphire/shapeshift").UndefinedToOptional<{
						name: any;
						value: any;
				  }>[]
				| undefined;
			channelTypes: string[][] | undefined;
			minValue: number | undefined;
			maxValue: number | undefined;
			minLength: number;
			maxLength: number;
		} & {
			options:
				| import("@sapphire/shapeshift").UndefinedToOptional<{
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
				  }>[]
				| undefined;
		}
	>
>;
export declare const applicationCommand: import("@sapphire/shapeshift").ObjectValidator<
	{
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
	},
	import("@sapphire/shapeshift").UndefinedToOptional<{
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
>;
//# sourceMappingURL=Validators.d.ts.map
