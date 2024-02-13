---
title: MSSQL Lando Plugin
description: Add a highly configurable Microsoft MSSQL service to Lando for local development with all the power of Docker and Docker Compose
next: ./config.html
---

# MSSQL

[MSSQL](https://www.microsoft.com/en-us/sql-server/sql-server-2016) lets you build intelligent, mission-critical applications using a scalable, hybrid database platform that has everything built-in from in-memory performance and advanced security to in-database analytics.

You can easily add it to your Lando app by adding an entry to the [services](https://docs.lando.dev/core/v3/lando-service.html) top-level config in your [Landofile](https://docs.lando.dev/core/v3).

```yaml
services:
  myservice:
    type: mssql
```

## Supported versions

*   [2019-latest](https://hub.docker.com/_/microsoft-mssql-server)
*   **[2017-latest](https://hub.docker.com/_/microsoft-mssql-server)** **(default)**
*   [custom](https://docs.lando.dev/core/v3/lando-service.html#overrides)

::: warning ARM-Chip Macs Require Rosetta Emulation!
There is a bug in the image when emulated by M1 (or other ARM-chip) Macs. Until Microsoft releases an ARM-native version of the image, you should turn on the setting "Use Rosetta for x86/amd64 emulation on Apple Silicon" in the "Features in Development" section of your Docker Desktop settings.
:::

## Patch versions

This service does not support patch versions but if you **really** need something like that, you could consider using either a [custom compose service](https://docs.lando.dev/plugins/compose) or a service [overrides](https://docs.lando.dev/core/v3/lando-service.html#overrides).

