# Ben Bristow Website App

## Setup

Make sure to install the dependencies:

```bash
npm install
```

### Backend API

Required to be running

See https://github.com/benbristow/benbristow-website-api

## Development Server

### Ensure IDE has environment variable set for self-signed API certificate

```sh
NODE_TLS_REJECT_UNAUTHORIZED=0
```

### Start
Start the development server on `http://localhost:3000`

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```
