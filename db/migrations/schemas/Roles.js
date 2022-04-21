const addressSchema = (table) => {
	table.uuid("id").primary().unique();
	table.uuid('user_id').references('id').inTable('users').onDelete('CASCADE').onUpdate('CASCADE')
	table.string("role").notNullable();
	table.timestamps(true, true);
};

module.exports = addressSchema;
