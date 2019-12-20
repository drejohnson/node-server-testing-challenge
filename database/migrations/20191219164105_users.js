exports.up = function(knex) {
  return knex.schema.createTable('users', t => {
    t.increments();
    t.string('name')
      .notNullable()
      .unique();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users');
};
