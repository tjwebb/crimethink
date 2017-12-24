exports.compilePermission = (action, resource) => `${action}:${resource}`

exports.resolvePermissions = (policies, permission) => {
  return policies.find(policy => policy.hasPermission(permission))
}

exports.enforce = (func, name, permissions) => (subject, ...args) => {
  const permitted = permissions.every(({ action, resource }) => {
    if (subject.isPermitted(action, resource)) return true

    throw new Error(`subject ${subject} not permitted ${action} on ${resource}`)
  })

  return permitted && func(args)
}

exports.Permission = require('./Permission')
exports.Policy = require('./Policy')
exports.Subject = require('./Subject')
