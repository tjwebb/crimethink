# crimethink

[![NPM version][npm-image]][npm-url]
[![Build Status][ci-image]][ci-url]

A permissions resolver for node.js. Inspired by [sails-permissions](https://github.com/trailsjs/sails-permissions) and [Shiro](https://shiro.apache.org/index.html).

## Domain Objects

### `Subject`

A subject (usually a User) that performs an action on a resource.

### `Policy`

Grants a set of `Permission`s to a `User`.

### `Permission`

Grants ability to perform an action on a resource.

### `Permission.Criteria`

A set of conditions that must hold for Resource parameters.

### `Action` (enum)

- `Action.CREATE`
- `Action.READ`
- `Action.MODIFY`
- `Action.DELETE`

### `Resource`

An Express-compatible [Route Path](http://expressjs.com/en/guide/routing.html) string for a domain object. e.g.

- `/contact` 
  - any contact
- `/contact/123`
  - the contact with id=123
- `/contact/:id`
  - any contact where `id` satisfies Permission Criteria

## API

### `Subject.isPermitted(action, resource)`

Returns `true` if `user` is permitted to perform the given `action` on the given `resource`; `false`, otherwise.

#### Example

```js
// a contact manager, with one policy, contactManagerPolicy, which allows the user to create new contacts,
// and manage existing ones.
const { Subject, Action } = require('crimethink')

const contactManager = new Subject({
  policies: [
    { name: 'contactManagerPolicy',
      permissions: [
        { action: Action.CREATE, resource: 'contact' },
        { action: Action.READ, resource: 'contact/:id' },
        { action: Action.MODIFY, resource: 'account' }
      ]
    }
  ]
})

contactManager.isPermitted(Action.READ, 'contact')  // true
contactManager.isPermitted(Action.READ, 'contact/')  // true
contactManager.isPermitted(Action.READ, 'contact/tjwebb')  // true
contactManager.isPermitted(Action.CREATE, 'contact')  // true

contactManager.isPermitted(Action.READ, 'account')  // false
contactManager.isPermitted(Action.CREATE, 'account')  // false
contactManager.isPermitted(Action.MODIFY, 'contact')  // false
```

### `enforce(func, permissions)`

Create a function from `func` that enforces the given permissions, and accepts a `Subject` as the first argument. Throws `Error` if invoked with insufficient permissions.`

#### Example

```js
const { Subject, enforce } = require('crimethink')

const contactManager = // ... from previous example

/**
 * Retrieve a contact from the database
 */
function getContact (id) {
  // select * from contact where id = ?
}
function deleteContact (id) {
  // delete contact where id = ?
}

const enforced = {
  getContact: enforce(getContact, [ { action: Action.READ, resource: 'contact' } ]),
  deleteContact: enforce(getContact, [ { action: Action.DELETE, resource: 'contact' } ])
}

enforced.getContact(contactManager, 'tjwebb') // success
enforced.deleteContact(contactManager, 'tjwebb') // throws Error
```

[npm-image]: https://img.shields.io/npm/v/crimethink.svg?style=flat-square
[npm-url]: https://npmjs.org/package/crimethink
[ci-image]: https://img.shields.io/travis/tjwebb/crimethink.svg?style=flat-square&label=Linux%20/%20OSX
[ci-url]: https://travis-ci.org/tjwebb/crimethink
