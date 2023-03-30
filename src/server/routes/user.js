const {
  addUser, addDeposit, resetDeposit, getUser, updateUser, removeUser,
} = require('../../schemas/controllers/user');

module.exports = ([
  {
    path: '/users',
    method: 'POST',
    config: {
      tags: ['api'],
      description: 'Add new user',
      validate: addUser.validate,
      response: addUser.response,
      plugins: {
        logging: false,
      },
    },
    handler: ({ UserController }) => ((request, h) => UserController.addUser(request, h)),
  },
  {
    path: '/users/{userId}',
    method: 'GET',
    config: {
      tags: ['api'],
      description: 'Get user',
      validate: getUser.validate,
      response: getUser.response,
      plugins: {
        logging: false,
      },
    },
    handler: ({ UserController }) => ((request, h) => UserController.getUser(request, h)),
  },
  {
    path: '/users/{userId}',
    method: 'PUT',
    config: {
      tags: ['api'],
      description: 'User update own account',
      validate: updateUser.validate,
      response: updateUser.response,
      plugins: {
        logging: false,
      },
    },
    handler: ({ UserController }) => ((request, h) => UserController.updateUser(request, h)),
  },
  {
    path: '/users/{userId}',
    method: 'DELETE',
    config: {
      tags: ['api'],
      description: 'User delete own user account',
      validate: removeUser.validate,
      response: removeUser.response,
      plugins: {
        logging: false,
      },
    },
    handler: ({ UserController }) => ((request, h) => UserController.removeUser(request, h)),
  },
  {
    path: '/deposit',
    method: 'POST',
    config: {
      tags: ['api'],
      description: 'Buyer deposit into their account',
      validate: addDeposit.validate,
      response: addDeposit.response,
      plugins: {
        logging: false,
      },
    },
    handler: ({ UserController }) => ((request, h) => UserController.addDeposit(request, h)),
  },
  {
    path: '/reset',
    method: 'POST',
    config: {
      tags: ['api'],
      description: 'Buyer reset their deposit',
      validate: resetDeposit.validate,
      response: resetDeposit.response,
      plugins: {
        logging: false,
      },
    },
    handler: ({ UserController }) => ((request, h) => UserController.resetDeposit(request, h)),
  },
]);
