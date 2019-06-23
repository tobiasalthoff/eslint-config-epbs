# Eslint & Prettier Base Setup (EPBS)

[![npm version](https://badge.fury.io/js/%40tobiasalthoff%2Feslint-config-epbs.svg)](https://badge.fury.io/js/%40tobiasalthoff%2Feslint-config-epbs)

## Installation

### Local / Per project

1. Navigate to your project and install `@tobiasalthoff/eslint-config-epbs`:

```shell
npx install-peerdeps --dev @tobiasalthoff/eslint-config-epbs
```

2. Create an `.eslintrc` file in your project root.

3. The file should look like this:

```json
{
  "extends": [
    "@tobiasalthoff/eslint-config-epbs",
  ],
}
```

### Global

1. Install `@tobiasalthoff/eslint-config-epbs` globally:

```
npx install-peerdeps --global @tobiasalthoff/eslint-config-epbs
```

2. Create an `.eslintrc` file in your home directory. On Mac this will be `~/.eslintrc` and on Windows this will be `C:\Users\{username}\.eslintrc`

3. The file should look like this:

```json
{
  "extends": [
    "@tobiasalthoff/eslint-config-epbs",
  ],
}
```