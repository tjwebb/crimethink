/* eslint no-process-env: 0, no-console: 0 */

module.exports = class Subject {

  /**
   * @param action
   * @param resource
   * @returns boolean
   */
  isPermitted (action, resource) {
    const key = `${action}:${resource}`
    if (this.cache.has(key)) return true

    const policy = this.policies.find(({ name, permissions = [ ] }) => (
      !!permissions.find(p => p.action === action && p.resource === resource)
    ))
    const permitted = !!policy
    this.cache.set(key, permitted)

    return permitted
  }

  constructor ({ policies = [ ] }) {
    this.policies = policies
    this.cache = new Map()
    this.debug = /crimethink/.test(process.env.DEBUG)
  }

}
