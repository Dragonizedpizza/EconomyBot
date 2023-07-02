import { createLogger, format, transports, addColors } from "winston";
import { basename } from "path";
import { inspect } from "util";
const loggerConfig = {
	levels: {
		emerg: 0,
		alert: 1,
		error: 2,
		warn: 3,
		notice: 4,
		db: 5,
		info: 6,
		debug: 7,
	},
	colors: {
		emerg: "red",
		alert: "red",
		error: "magenta",
		warn: "yellow",
		notice: "grey",
		db: "green",
		info: "blue",
		debug: "grey",
	},
};
// Custom log formatting
const logFormat = format.printf((info) => {
	const { timestamp, level, label, message, ...rest } = info;
	let log = `[${timestamp}] - [${level}]: ${message}`;
	if (typeof rest === "object" && Object.keys(rest).length !== 0) log += "\n" + inspect(rest, { depth: 0, colors: true });
	// log = `${log}\n${JSON.stringify(rest, null, 2)}`.replace(/\\n/g, "\n");
	return log;
});
/**
 * Create a new logger
 * @type {Logger}
 */
export const Logger = createLogger({
	levels: loggerConfig.levels,
	format: format.combine(
		format.errors({ stack: true }),
		format.label({ label: basename(import.meta.url) }),
		format.timestamp({ format: "DD-MM-YYYY HH:mm:ss" }),
	),
	transports: [
		new transports.Console({
			format: format.combine(format.colorize(), logFormat),
		}),
		new transports.File({
			filename: "./data/full.log",
			format: logFormat,
			options: { flags: "w" },
		}),
		new transports.File({
			filename: "./data/error.log",
			level: "warn",
			format: logFormat,
			options: { flags: "w" },
		}),
	],
});
addColors(loggerConfig.colors);
export default Logger;
//# sourceMappingURL=Logger.js.map
