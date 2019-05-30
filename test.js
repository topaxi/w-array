const { expect } = require('chai')
const w = require('.')

describe('w', () => {
  describe('with simple string', () => {
    it('should create a word array', () => {
      expect(w`foo bar baz`).to.deep.equal(['foo', 'bar', 'baz'])
    })

    it('should work with newlines', () => {
      expect(w`
        foo
        bar
        baz
      `).to.deep.equal(['foo', 'bar', 'baz'])
    })
  })

  describe('with interpolation', () => {
    it('should interpolate values', () => {
      expect(w`foo ${'bar'} baz`).to.deep.equal(['foo', 'bar', 'baz'])
      expect(w`foo${'bar'}baz`).to.deep.equal(['foobarbaz'])
    })
  })
})
