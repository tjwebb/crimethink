const { Permission } = require('./')

module.exports = class Policy {

  hasPermission (action = Permission.missingAction, resource = Permission.missingResource) {
    return this.permissions.some(p => p.equals(action, resource))
  }

  constructor ({ permissions = [ ] }) {
    this.permissions = permissions.map(permission => new Permission(permission))
  }
}
