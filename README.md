# Eslint & Prettier Base Setup (EPBS)

## Getting started

1. Install everything with

```zsh
# Requires npm 5+
$ npx install-peerdeps --dev @tobiasalthoff/eslint-config-epbs
```

2. Extend the config within your `.eslintrc`

```
{
  "extends": [
    "epbs",
  ],
}
```