---
title: MSSQL Lando Plugin
description: Add a highly configurable Microsoft MSSQL service to Lando for local development with all the power of Docker and Docker Compose
next: ./config.html
---

# MSSQL

[MSSQL](https://www.microsoft.com/en-us/sql-server/sql-server-2016) lets you build intelligent, mission-critical applications using a scalable, hybrid database platform that has everything built-in from in-memory performance and advanced security to in-database analytics.

You can easily add it to your Lando app by adding an entry to the [services](https://docs.lando.dev/config/services.html) top-level config in your [Landofile](https://docs.lando.dev/config/lando.html).

```yaml
services:
  myservice:
    type: mssql
```

## Supported versions

*   [2019-latest](https://hub.docker.com/_/microsoft-mssql-server)
*   **[2017-latest](https://hub.docker.com/_/microsoft-mssql-server)** **(default)**
*   [custom](https://docs.lando.dev/config/services.html#advanced)

::: warning ARM-Chip Macs Require Rosetta Emulation!
There is a bug in the image when emulated by M1 (or other ARM-chip) Macs. Until Microsoft releases an ARM-native version of the image, you should turn on the setting "Use Rosetta for x86/amd64 emulation on Apple Silicon" in the "Features in Development" section of your Docker Desktop settings.
:::

## Patch versions

This service does not support patch versions but if you **really** need something like that, you could consider using either a [custom compose service](https://docs.lando.dev/compose) or a service [overrides](https://docs.lando.dev/config/services.html#overrides).

## Custom Installation

This plugin is included with Lando by default. That means if you have Lando version `3.0.8` or higher then this plugin is already installed!

However if you would like to manually install the plugin, update it to the bleeding edge or install a particular version then use the below. Note that this installation method requires Lando `3.5.0+`.

:::: code-group
::: code-group-item DOCKER
```bash:no-line-numbers
# Ensure you have a global plugins directory
mkdir -p ~/.lando/plugins

# Install plugin
# NOTE: Modify the "npm install @lando/mssql" line to install a particular version eg
# npm install @lando/mssql@0.5.2
docker run --rm -it -v ${HOME}/.lando/plugins:/plugins -w /tmp node:14-alpine sh -c \
  "npm init -y \
  && npm install @lando/mssql --production --flat --no-default-rc --no-lockfile --link-duplicates \
  && npm install --production --cwd /tmp/node_modules/@lando/mssql \
  && mkdir -p /plugins/@lando \
  && mv --force /tmp/node_modules/@lando/mssql /plugins/@lando/mssql"

# Rebuild the plugin cache
lando --clear
```
:::
::: code-group-item HYPERDRIVE
```bash:no-line-numbers
# @TODO
# @NOTE: This doesn't actaully work yet
hyperdrive install @lando/mssql
```
::::

You should be able to verify the plugin is installed by running `lando config --path plugins` and checking for `@lando/mssql`. This command will also show you _where_ the plugin is being loaded from.
