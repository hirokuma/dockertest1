const Log = require('simple-logs');
const fs = require('fs');

const log = new Log('abc');
log.info('Hello, Docker!?');
fs.writeFileSync('/data/test.txt', 'Hello, Docker!!', 'utf8');
