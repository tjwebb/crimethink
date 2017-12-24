const Action = require('./Action')

module.exports = class Permission {

  static get missingAction () { return Action.NONE }
  static get missingResource () { return Action.NONE }

  equals (action, resource) {
    return this.action === action && this.resource === resource
  }

  constructor ({ action = Permission.missingAction, resource = Permission.missingResource }) {
    this.action = action
    this.resource = resource.trim().replace(/\/+$/, '')
  }
}
