# theia-pkg
This is a POC to bundle Theia into one single executable with [`nexe`](https://github.com/nexe/nexe).
See: https://github.com/theia-ide/theia/issues/4541

# Prerequisites
Defined [here](https://github.com/theia-ide/theia/blob/master/doc/Developing.md#prerequisites).

# Install
To install the dependencies.
```
yarn
```

# Build
To generate the application code for both the frontend and the backend.
```
yarn build
```

# Package
Your executable will be under the `dist` folder. Do **not** move the executable only, you should move the entire `dist` folder instead.
It [seems](https://github.com/nexe/nexe/issues/525#issuecomment-422963155), this is a limitation, but has to be verified though.
```
yarn package
```

