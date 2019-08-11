if (process.env.NODE_ENV === 'production') {
  module.exports = require('dist/eco-state.min.js');
} else {
  module.exports = require('dist/eco-state.js');
}