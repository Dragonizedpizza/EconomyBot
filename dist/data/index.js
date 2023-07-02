import { Sequelize, DataTypes } from "sequelize";
export default function defineModels(seq) {
	const nonNullString = {
			type: DataTypes.STRING,
			allowNull: false,
		},
		stringArray = {
			type: DataTypes.ARRAY(DataTypes.STRING),
			defaultValue: [],
		};
	seq.define("user", {
		id: nonNullString,
		wallet: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: 200,
		},
		bank: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: 0,
		},
		inventory: stringArray,
	});
	seq.define("guild", {
		id: nonNullString,
		prefixes: stringArray,
		disabledModules: stringArray,
		levels: DataTypes.JSON,
		currencyName: {
			type: DataTypes.STRING,
			defaultValue: "coin",
		},
		currencyEmoji: {
			type: DataTypes.STRING,
			defaultValue: "🪙",
		},
	});
	seq.define("pet", {
		name: nonNullString,
		type: nonNullString,
		level: {
			type: DataTypes.INTEGER,
			defaultValue: 0,
		},
		skin: {
			type: DataTypes.STRING,
			defaultValue: "DEFAULT",
		},
	});
}
//# sourceMappingURL=index.js.map
