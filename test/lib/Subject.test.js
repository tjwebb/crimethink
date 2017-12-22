const assert = require('assert')
const { Subject } = require('../../')
const {
  admin: adminPolicies
} = require('../groups')

describe('Subject', () => {

  describe('#isPermitted', () => {
    it('should exist', () => {
      assert(Subject.prototype.isPermitted)
    })
    describe('refuting permissions', () => {
      describe('base case', () => {
        it('subject with no policies should not be permitted anything', () => {
          const  prole = new Subject({ policies: [ ] })

          assert(!prole.isPermitted('read', 'company'))
          assert(!prole.isPermitted('read', 'account'))
          assert(!prole.isPermitted('read', 'contact'))
          assert(!prole.isPermitted('read', 'user'))
        })
      })
    })
    describe('affirming permissions', () => {
      describe('should affirm admin group', () => {
        const bigBrother = new Subject({ policies: adminPolicies })

        it('should affirm read on company', () => {
          assert(bigBrother.isPermitted('read', 'company'))
        })
      })
    })
  })
})
