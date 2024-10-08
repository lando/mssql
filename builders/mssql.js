'use strict';

// Modules
const _ = require('lodash');

// Builder
module.exports = {
  name: 'mssql',
  config: {
    version: '2017-latest',
    supported: ['2017-latest', '2019-latest', '2022-latest'],
    creds: {
      user: 'sa',
      password: 'he11oTHERE',
    },
    path: [
      '/usr/local/sbin',
      '/usr/local/bin',
      '/usr/sbin',
      '/usr/bin',
      '/sbin',
      '/bin',
      '/opt/mssql-tools/bin',
      '/opt/mssql-tools18/bin',
    ],
    port: '1433',
  },
  parent: '_service',
  builder: (parent, config) => class LandoMsSql extends parent {
    constructor(id, options = {}) {
      options = _.merge({}, config, options);

      if (!options.healthcheck) options.healthcheck = require('../utils/get-default-healthcheck')(options);

      // Build the default stuff here
      const mssql = {
        image: 'mcr.microsoft.com/mssql/server',
        command: '/opt/mssql/bin/sqlservr',
        environment: {
          ACCEPT_EULA: 'Y',
          PATH: options.path.join(':'),
          SA_PASSWORD: options.creds.password,
        },
        volumes: [
          `${options.data}:/var/opt/data`,
        ],
      };
      // Send it downstream
      super(id, options, {services: _.set({}, options.name, mssql)});
    };
  },
};
