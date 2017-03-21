w-array
=======

Installation:

```bash
$ npm install w-array --save
```

Usage:

```javascript
const arr = w`foo bar baz`
// == ['foo', 'bar', 'baz']

const name = 'topaxi'
const arr2 = w`hello ${name}`
// == ['hello', 'topaxi']
```

## License

MIT License
