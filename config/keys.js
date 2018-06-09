if (proccess.env.NODE_ENV === 'PRODUCTION') {
	module.exports = require('./prod');
} else {
	module.exports = require('./dev');
}
