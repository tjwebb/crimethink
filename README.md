# crimethink

[![NPM version][npm-image]][npm-url]
[![Linux + OSX Build Status][ci-image]][ci-url]

A general-purpose permissions resolver for node.js. Inspired by [sails-permissions](https://github.com/trailsjs/sails-permissions) and [Shiro](https://shiro.apache.org/index.html).

## Domain Objects

### `Subject`

A subject (usually a User) that performs an action on a resource.

### `Permission`

Grants ability to perform an action on a resource.

### `Policy`

Grants a set of `Permission`s to a `User`.

### `action`

## API

```js
const { Subject } = require('crimethink')
```

### `Subject.isPermitted(action, resource [, criteria])`

Returns `true` if `user` is permitted to perform the given `action` on the given `resource`; `false`, otherwise.

[npm-image]: https://img.shields.io/npm/v/crimethink.svg?style=flat-square
[npm-url]: https://npmjs.org/package/crimethink
[ci-image]: https://img.shields.io/travis/tjwebb/crimethink.svg?style=flat-square&label=Linux%20/%20OSX
[ci-url]: https://travis-ci.org/tjwebb/crimethink
