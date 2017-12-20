const assert = require('assert')
const { Subject } = require('../../')

describe('Subject', () => {
  describe('#isPermitted', () => {
    it('should exist', () => {
      assert(Subject.prototype.isPermitted)
    })
  })
})
