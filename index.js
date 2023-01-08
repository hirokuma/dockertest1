const Log = require('simple-logs');
const fs = require('fs');

const log = new Log('abc');
log.info('Hello, Docker!?');
const rd = fs.readFileSync('/data/abc/read.txt', 'utf8');
log.warn(rd);
fs.writeFileSync('/data/abc/test.txt', 'Hello, Docker!!', 'utf8');
