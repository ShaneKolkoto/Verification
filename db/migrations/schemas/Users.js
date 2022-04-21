const userSchema = (table) => {
	table.uuid("id").primary().unique();
	table.string("name").notNullable();
	table.string("surname").notNullable();
	table.string("email").unique().notNullable();
    table.string("password").notNullable()
	table.timestamps(true, true);
};

module.exports = userSchema;
