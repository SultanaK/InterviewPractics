let assert = require('assert')
let index = require('../index')

/// describe it 
before()
after()
beforeEach()
afterEach()

describe('Validation of  Phone number', function () {
  it('Provide valid phone number', function () {
   assert.strictEqual(true, index.valitedNumberFunction('123-234-2345')) 
  })
  it('Provide invalid phone number', function () {
   assert.strictEqual(false, index.valitedNumberFunction('123-234-45')) 
  })

  
})