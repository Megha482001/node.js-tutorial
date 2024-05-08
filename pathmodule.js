const path = require('path');

const a = path.basename('/foo/bar/baz/asdf/quux.html');
const b = path.dirname('/foo/bar/baz/asdf/quux.html');
console.log(a,b)