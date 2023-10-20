'use strict';

// checks to see if a setting is disabled
module.exports = options => {
  return [
    'sqlcmd',
    `-U ${options.creds.user}`,
    `-H ${options.name}`,
    `-P ${options.creds.password}`,
    `-Q quit`,
  ].join(' ');
};
