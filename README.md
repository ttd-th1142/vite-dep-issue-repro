# Steps to recreate issue

> Install all workspace packages
```bash
yarn workspaces foreach install
```

> Build the "feature" package with a dependency on React 18 and run both vite and webpack servers
```bash
yarn run clean-start
```

# Issue Recap / Context
In Vite, different versions of a package look like they are being resolved to a single version. 

In this example, we will demonstrate this with React. We have a feature package called `feature-react-18` with a dependency on `react@^18.2.0`. Our "host" apps will have a dependency on `react@^16.14.0`.

If we run `host-react-16-webpack`, we can run a server with react 16 and use our `feature-react-18` to mount a new react tree that's using react 18. The screenshots below shows this expected behavior:
<p align="center" width="100%">
    <img src="./screenshots/webpack-host-16.png" width=75% />
    <br>
    [Webpack] Host rendered using react 16
</p>
</br>

<p align="center" width="100%">
    <img src="./screenshots/webpack-feature-18.png" width=75%>
    <br>
    [Webpack] Feature rendered using react 18
</p>
</br>
<hr/>

In `host-react-16-vite`, the imports point to the same version of react, which is the one loaded in by the host:
<p align="center" width="100%">
    <img src="./screenshots/vite-host-16.png" width=75% />
    <br>
    [Vite] Host rendered using react 16
</p>
</br>

<p align="center" width="100%">
    <img src="./screenshots/vite-feature-16.png" width=75%>
    <br>
    [Vite] Feature rendered using react 16, instead of v18
</p>
</br>
<hr/>

Digging deeper into the imports, these screenshots show that webpack separates the different react versions between the host and feature.
<p align="center" width="100%">
    <img src="./screenshots/webpack-import-16.png" width=75% />
    <br>
    [Webpack] In the host, the imported react module is on version 16
</p>
</br>

<p align="center" width="100%">
    <img src="./screenshots/webpack-import-feature-18.png" width=75%>
    <br>
    [Webpack] In the feature, the imported react module is on version 18
</p>
</br>
<hr/>

However, in Vite, the react versions are the same between the host and feature.
<p align="center" width="100%">
    <img src="./screenshots/vite-import-16.png" width=75% />
    <br>
    [Vite] In the host, the imported react module is on version 16
</p>
</br>

<p align="center" width="100%">
    <img src="./screenshots/vite-import-feature-16.png" width=75%>
    <br>
    [Vite] In the feature, the imported react module is still on version 16
</p>
</br>