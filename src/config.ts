import { Config } from "#struct";

export default new Config({
	token: "TOKEN",
	defaultPrefixes: ["PREFIX"],
	ownerIds: ["OWNER_ID"],
	database: {
		type: "mongodb", // has to be a supported prisma db type
		url: "DATABASE_URL",
	},
});
