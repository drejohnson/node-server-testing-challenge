const db = require('../database/db-config.js');

const findUser = () => {
  return db('users');
};

const findById = id => {
  return db('users')
    .select('id', 'name')
    .where({ id })
    .first();
};

const add = async user => {
  const ids = await db('users').insert(user);
  const [id] = ids;
  return findById(id);
};

const update = async (id, changes) => {
  return null;
};

const remove = async id => {
  return db('users')
    .where({ id })
    .del();
};

module.exports = { findUser, findById, add, update, remove };
