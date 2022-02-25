# Woolgens Website Frontend

The is a "mono-repo" containing all website from `Woolgens.net`.

## Environment Variables

### API EndPoints
```
- NEXT_PUBLIC_AUTH_ENDPOINT
- NEXT_PUBLIC_MINECRAFT_USER_ENDPOINT
- NEXT_PUBLIC_FORUM_ENDPOINT
- NEXT_PUBLIC_LAND_ENDPOINT
- NEXT_PUBLIC_CHANGELOG_ENDPOINT
- NEXT_PUBLIC_LIVE_ENDPOINT
```

### Staff API EndPoints
```
- NEXT_PUBLIC_CHATLOG_ENDPOINT
```

### Tokens
```
- NEXT_PUBLIC_DEV_TOKEN (used to auth a development enviorment)
```

### Server Data
```
- NEXT_PUBLIC_DISCORD_SERVER_ID
- NEXT_PUBLIC_CURRENT_SEASON
- NEXT_PUBLIC_MINECRAFT_IP
```

## Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# Run tests
$ yarn type-check

# Lint
$ yarn lint
$ yarn lint --fix

# Utilities
$ yarn tailwind-config-viewer
```
