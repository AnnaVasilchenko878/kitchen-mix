const GULP = require('gulp');

function test(done) {
    console.log('Yes');
    done();
}
exports.default=test;