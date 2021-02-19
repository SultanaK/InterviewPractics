let assert = require('assert')
let index = require('../index')

/// describe it 
/* before()
after()
beforeEach()
afterEach() */

describe('Validation of  Full name', function () {
  it('Provide valid first name', function () {
   assert.strictEqual(true, index.validFirstName('Khandaker')) 
    
  })
  it('Provide invalid first name', function () {
   assert.strictEqual(false, index.validFirstName('khandake')) 
  })

 it('Provide valid last name', function () {
   assert.strictEqual(true, index.validLasttName('Sultana')) 
    
  })
  it('Provide invalid last name', function () {
   assert.strictEqual(false, index.validLasttName('khandak')) 
  }) 
})