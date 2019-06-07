# Eslint & Prettier Base Setup (EPBS)

## Getting started

1. Install everything with

```zsh
  # Requires npm 5+
  $ npx install-peerdeps --dev eslint-config-epbs
```

2. Add the config to your `.eslintrc`

```
{
  "extends": [
    "epbs",
  ],
}
```