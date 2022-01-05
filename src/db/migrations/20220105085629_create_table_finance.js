
exports.up = function(knex) {
    return knex.schema.createTable("finance", (table) => {
        table.increments("id").primary();
        table.date("date").notNull();
        table.string("category").notNull();
        table.string("title").notNull();
        table.float("value").notNull();
      });
};

exports.down = function(knex) {
    return knex.schema.dropTable("finance");
};
