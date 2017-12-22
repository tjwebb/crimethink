module.exports = class Permission {

  static get missingAction () { return 'none' }
  static get missingResource () { return 'none' }

  equals (action, resource) {
    return this.action === action && this.resource === resource
  }

  constructor ({ action = Permission.missingAction, resource = Permission.missingResource }) {
    this.action = action
    this.resource = resource.trim().replace(/\/+$/, '')
  }
}
