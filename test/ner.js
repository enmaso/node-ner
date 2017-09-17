const assert = require('assert')
const ner = require('../ner.js')

describe('ner parse', () => {
  it('returns tags JSON object', (done) => {
    let result = {
      LOCATION: [],
      ORGANIZATION: [
        'Lehman Brothers',
        'Federal Reserve',
        'Federal Reserve Bank of New York',
        'New York Fed',
        'Treasury'
      ],
      DATE: [ 'Sunday' ],
      MONEY: [],
      PERSON: [ 'Timothy R. Geithner', 'Henry M. Paulson Jr' ],
      PERCENT: [],
      TIME: []
    }
    let file = `${__dirname}/sample.txt`
    ner.parse(file, (tags) => {
      assert.equal(JSON.stringify(tags), JSON.stringify(result))
      done()
    })
  }).timeout(10000)
})
