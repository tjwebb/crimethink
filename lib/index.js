exports.compilePermission = (action, resource) => `${action}:${resource}`

exports.resolvePermissions = (policies, permission) => {
  return policies.find(policy => policy.hasPermission(permission))
}

exports.Permission = require('./Permission')
exports.Policy = require('./Policy')
exports.Subject = require('./Subject')
