/* eslint no-process-env: 0, no-console: 0 */
const { Policy, compilePermission } = require('./')

module.exports = class Subject {

  /**
   * @param action
   * @param resource
   * @returns boolean
   */
  isPermitted (action, resource) {
    if (!action) throw new RangeError('action is a required argument for isPermitted')
    if (!resource) throw new RangeError('resource is a required argument for isPermitted')

    const key = compilePermission(action, resource)

    if (this.cache.has(key)) return true

    const permitted = this.policies.some(policy => policy.hasPermission(action, resource))
    this.cache.set(key, permitted)

    return permitted
  }

  constructor ({ policies = [ ] }) {
    this.policies = policies.map(policy => new Policy(policy))
    this.cache = new Map()
    this.debug = /crimethink/.test(process.env.DEBUG)
  }

}
