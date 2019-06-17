# slate-incident-management
An incident creation app with custom redux

## Authors
Aritra Ghosh

## Description

Installation

```
rm -rf node_modules
npm install
```

Fire up with `npm start` and go to `http://localhost:3000` to see the components in action

## Packages

1. React packages
2. my-custom-redux (the custom library with documentation)
3. Material UI for styling
4. Typescript
5. Lodash

## Features

1. The app is fully responsive using the custom redux library. The custom library exposes dispatch and subscribe functions as an interface. The library is a separate package in itself and is installed as a dependency.
2. User can create an incident and can see the same set of incidents created in the Home page.


The screen flow are hosted below:

App - https://gfycat.com/piercingwaterybanteng

## Folder structure
1. The project has a `src` with actions, store, components, pages, types, constants, styles segregated separately.
2. The `lib (my-custom-redux)` has a single file `store.ts` with package dependencies with exposed types.

