'use strict';

const home = require('./controllers/home');
const group = require('./controllers/group');
const category = require('./controllers/category');

module.exports = function routes(router) {
  router.get('/', home.main);
  router.get('/category', category.all);
  router.post('/signin', home.auth);
  router.post('/user/forgot"', home.register);
  router.post('/api/user/register', home.register);
  router.get('/group/:id', group.main);
};
