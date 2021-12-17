[comment]: <> (# Change log)

[comment]: <> (## [5.11.0]&#40;https://github.com/WeAreAthlon/frontend-webpack-boilerplate/releases/tag/v5.11.0&#41;)

[comment]: <> (### 12/11/2021)

[comment]: <> (### Updates)

[comment]: <> (* Removed dependency versions update badge from the README and index template files.)

[comment]: <> (* Updated `index.html` template to be more SEO friendly.)

[comment]: <> (### Major Vesions Packages Updates)

[comment]: <> (* `eslint@8.2.0` from `7.x` new features and breaking changes can be found on the official [release notes]&#40;https://github.com/eslint/eslint/releases/tag/v8.0.0&#41;.)

[comment]: <> (* `eslint-config-airbnb@19.0.0` from `18.x` new features and breaking changes can be found on the official [release notes]&#40;https://github.com/airbnb/javascript/releases/tag/eslint-config-airbnb-v19.0.0&#41;.)

[comment]: <> (### Package Versions Update)

[comment]: <> (+ `@babel/core@7.16.0` change log can be found on the official [release notes]&#40;https://github.com/babel/babel/releases/tag/v7.16.0&#41;.)

[comment]: <> (+ `@babel/preset-env@7.16.0` change log can be found on the official [release notes]&#40;https://github.com/babel/babel/releases/tag/v7.16.0&#41;.)

[comment]: <> (+ `autoprefixer@10.4.0` change log can be found on the official [release notes]&#40;https://github.com/postcss/autoprefixer/releases/tag/10.4.0&#41;.)

[comment]: <> (+ `babel-loader@8.2.3` change log can be found on the official [release notes]&#40;https://github.com/babel/babel-loader/releases/tag/v8.2.3&#41;.)

[comment]: <> (+ `copy-webpack-plugin@9.1.0` change log can be found on the official [release notes]&#40;https://github.com/webpack-contrib/copy-webpack-plugin/releases/tag/v9.1.0&#41;.)

[comment]: <> (+ `css-loader@6.5.1` change log can be found on the official [release notes]&#40;https://github.com/webpack-contrib/css-loader/releases/tag/v6.5.1&#41;.)

[comment]: <> (+ `css-minimizer-webpack-plugin@3.1.3` change log can be found on the official [release notes]&#40;https://github.com/webpack-contrib/css-minimizer-webpack-plugin/releases/tag/v3.1.3&#41;.)

[comment]: <> (+ `eslint-plugin-import@2.25.3` change log can be found on the official [release notes]&#40;https://github.com/yannickcr/eslint-plugin-react/releases/tag/v7.25.3&#41;.)

[comment]: <> (+ `eslint-plugin-jsx-a11y@6.5.1` change log can be found on the official [release notes]&#40;https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/releases/tag/v6.5.1&#41;)

[comment]: <> (+ `eslint-plugin-react@7.27.0` change log can be found on the official [release notes]&#40;https://github.com/yannickcr/eslint-plugin-react/releases/tag/v7.27.0&#41;.)

[comment]: <> (+ `eslint-plugin-react-hooks@4.3.0` change log can be found on the official [release notes]&#40;https://www.npmjs.com/package/eslint-plugin-react-hooks&#41;.)

[comment]: <> (+ `html-webpack-plugin@5.5.2` change log can be found on the official [release notes]&#40;https://github.com/jantimon/html-webpack-plugin/blob/main/CHANGELOG.md#550-2021-10-25&#41;.)

[comment]: <> (+ `mini-css-extract-plugin@2.4.0` change log can be found on the official [release notes]&#40;https://github.com/webpack-contrib/mini-css-extract-plugin/releases/tag/v2.4.0&#41;.)

[comment]: <> (+ `postcss@8.3.11` change log can be found on the official [release notes]&#40;https://github.com/postcss/postcss/releases/tag/8.3.11&#41;.)

[comment]: <> (+ `postcss-loader@6.2.0` change log can be found on the official [release notes]&#40;https://github.com/webpack-contrib/postcss-loader/releases/tag/v6.2.0&#41;.)

[comment]: <> (+ `sass@1.43.4` change log can be found on the official [release notes]&#40;https://github.com/sass/dart-sass/releases/tag/1.43.4&#41;.)

[comment]: <> (+ `sass-loader@12.3.0` change log can be found on the official [release notes]&#40;https://github.com/webpack-contrib/sass-loader/releases/tag/v12.3.0&#41;.)

[comment]: <> (+ `terser-webpack-plugin@5.2.5` change log can be found on the official [release notes]&#40;https://github.com/webpack-contrib/terser-webpack-plugin/releases/tag/v5.2.5&#41;.)

[comment]: <> (+ `webpack@5.64.0` change log can be found on the official [release notes]&#40;https://github.com/webpack/webpack/releases/tag/v5.64.0&#41;.)

[comment]: <> (+ `webpack-bundle-analyzer@4.5.0` change log can be found on the official [release notes]&#40;https://github.com/webpack-contrib/webpack-bundle-analyzer/blob/master/CHANGELOG.md#450&#41;)

[comment]: <> (+ `webpack-cli@4.9.1` change log can be found on the official [release notes]&#40;https://github.com/webpack/webpack-cli/releases/tag/v4.9.1&#41;.)

[comment]: <> (+ `webpack-dev-server@4.4.0` change log can be found on the official [release notes]&#40;https://github.com/webpack/webpack-dev-server/releases/tag/v4.4.0&#41;.)


[comment]: <> (## [5.10.0]&#40;https://github.com/WeAreAthlon/frontend-webpack-boilerplate/releases/tag/v5.10.0&#41;)

[comment]: <> (### 20/09/2021)

[comment]: <> (### Updates)

[comment]: <> (* Reconfigure loading of images and fonts from SASS files. - use webpack 5 assets loaders.)

[comment]: <> (* Removed `url-loader` and `file-loader` packages in flavor of the built-in webpack 5 assets management.)

[comment]: <> (### Resolved Issues)

[comment]: <> (* #38 Images referenced in SASS are not building properly)

[comment]: <> (* #39 Fonts fail to load )

[comment]: <> (* #32 Change loaders to webpack 5 assets mangment)

[comment]: <> (### Major Vesions Packages Updates)

[comment]: <> (* `clean-webpack-plugin@4.0.0` from `3.x` new features and breaking changes can be found on the official [release notes]&#40;https://github.com/johnagan/clean-webpack-plugin/releases/tag/v4.0.0&#41;.)

[comment]: <> (* `webpack-dev-server@4.2.1` from `3.x` new features and breaking changes can be found on the official [release notes]&#40;https://github.com/webpack/webpack-dev-server/releases/tag/v4.0.0&#41;.)

[comment]: <> (+ `postcss-loader@6.3.0` change log can be found on the official [release notes]&#40;https://github.com/webpack-contrib/postcss-loader/releases/tag/v6.3.0&#41;.)

[comment]: <> (+ `eslint-plugin-import@2.24.2` change log can be found on the official [release notes]&#40;https://github.com/yannickcr/eslint-plugin-react/releases/tag/v7.24.2&#41;.)

[comment]: <> (+ `mini-css-extract-plugin@2.3.0` change log can be found on the official [release notes]&#40;https://github.com/webpack-contrib/mini-css-extract-plugin/releases/tag/v2.3.0&#41;.)

[comment]: <> (+ `sass@1.41.1` change log can be found on the official [release notes]&#40;https://github.com/sass/dart-sass/releases/tag/1.41.1&#41;.)

[comment]: <> (+ `terser-webpack-plugin@5.2.4` change log can be found on the official [release notes]&#40;https://github.com/webpack-contrib/terser-webpack-plugin/releases/tag/v5.2.4&#41;.)

[comment]: <> (+ `webpack@5.53.0` change log can be found on the official [release notes]&#40;https://github.com/webpack/webpack/releases/tag/v5.53.0&#41;.)

[comment]: <> (### Package Versions Update)

[comment]: <> (+ `@babel/preset-env@7.15.6` change log can be found on the official [release notes]&#40;https://github.com/babel/babel/releases/tag/v7.15.6&#41;.)

[comment]: <> (+ `autoprefixer@10.3.4` change log can be found on the official [release notes]&#40;https://github.com/postcss/autoprefixer/releases/tag/10.3.4&#41;. )


[comment]: <> (## [5.9.0]&#40;https://github.com/WeAreAthlon/frontend-webpack-boilerplate/releases/tag/v5.9.0&#41;)

[comment]: <> (### 13/08/2021)

[comment]: <> (### Major Vesions Packages Updates)

[comment]: <> (+ `css-loader@6.2.0` from `5.x` new features and breaking changes can be found on the official [release notes]&#40;https://github.com/webpack-contrib/css-loader/releases/tag/v6.0.0&#41;.)

[comment]: <> (### Package Versions Update)

[comment]: <> (+ `@babel/core@7.15.0` change log can be found on the official [release notes]&#40;https://github.com/babel/babel/releases/tag/v7.15.0&#41;.)

[comment]: <> (+ `@babel/preset-env@7.15.0` change log can be found on the official [release notes]&#40;https://github.com/babel/babel/releases/tag/v7.15.0&#41;.)

[comment]: <> (+ `eslint@7.32.0` change log can be found on the official [release notes]&#40;https://github.com/eslint/eslint/releases/tag/v7.32.0&#41;.)

[comment]: <> (+ `eslint-plugin-import@2.24.0` change log can be found on the official [release notes]&#40;https://github.com/yannickcr/eslint-plugin-react/releases/tag/v7.24.0&#41;.)

[comment]: <> (+ `mini-css-extract-plugin@2.2.0` change log can be found on the official [release notes]&#40;https://github.com/webpack-contrib/mini-css-extract-plugin/releases/tag/v2.2.0&#41;.)

[comment]: <> (+ `postcss@8.3.6` change log can be found on the official [release notes]&#40;https://github.com/postcss/postcss/releases/tag/8.3.6&#41;.)

[comment]: <> (+ `sass@1.37.5` change log can be found on the official [release notes]&#40;https://github.com/sass/dart-sass/releases/tag/1.37.5&#41;.)

[comment]: <> (+ `webpack@5.50.0` change log can be found on the official [release notes]&#40;https://github.com/webpack/webpack/releases/tag/v5.50.0&#41;.)

[comment]: <> (+ `webpack-cli@4.8.0` change log can be found on the official [release notes]&#40;https://github.com/webpack/webpack-cli/releases/tag/v4.8.0&#41;.)

[comment]: <> (## [5.8.0]&#40;https://github.com/WeAreAthlon/frontend-webpack-boilerplate/releases/tag/v5.8.0&#41;)

[comment]: <> (### 13/07/2021)

[comment]: <> (### Updates)

[comment]: <> (* Migration of the CI to https://travis-ci.com)

[comment]: <> (### Major Vesions Packages Updates)

[comment]: <> (+ `mini-css-extract-plugin@2.1.0` from `1.x` new features and breaking changes can be found on the official [release notes]&#40;https://github.com/webpack-contrib/mini-css-extract-plugin/releases/tag/v2.0.0&#41;.)

[comment]: <> (### Package Versions Update)

[comment]: <> (+ `@babel/core@7.14.6` change log can be found on the official [release notes]&#40;https://github.com/babel/babel/releases/tag/v7.14.6&#41;.)

[comment]: <> (+ `@babel/preset-env@7.14.7` change log can be found on the official [release notes]&#40;https://github.com/babel/babel/releases/tag/v7.14.7&#41;.)

[comment]: <> (+ `autoprefixer@10.3.1` change log can be found on the official [release notes]&#40;https://github.com/postcss/autoprefixer/releases/tag/10.3.1&#41;.)

[comment]: <> (+ `copy-webpack-plugin@9.0.1` change log can be found on the official [release notes]&#40;https://github.com/webpack-contrib/copy-webpack-plugin/releases/tag/v9.0.1&#41;.)

[comment]: <> (+ `css-minimizer-webpack-plugin@3.0.2` change log can be found on the official [release notes]&#40;https://github.com/webpack-contrib/css-minimizer-webpack-plugin/releases/tag/v3.0.2&#41;.)

[comment]: <> (+ `eslint@7.30.0` change log can be found on the official [release notes]&#40;https://github.com/eslint/eslint/releases/tag/v7.30.0&#41;.)

[comment]: <> (+ `html-webpack-plugin@5.3.2` change log can be found on the official [release notes]&#40;https://github.com/jantimon/html-webpack-plugin/blob/main/CHANGELOG.md#532-2021-06-22&#41;.)

[comment]: <> (+ `postcss@8.3.5` change log can be found on the official [release notes]&#40;https://github.com/postcss/postcss/releases/tag/8.3.5&#41;.)

[comment]: <> (+ `postcss-loader@6.1.1` change log can be found on the official [release notes]&#40;https://github.com/webpack-contrib/postcss-loader/releases/tag/v6.1.1&#41;.)

[comment]: <> (+ `sass@1.35.2` change log can be found on the official [release notes]&#40;https://github.com/sass/dart-sass/releases/tag/1.35.2&#41;.)

[comment]: <> (+ `terser-webpack-plugin@5.1.4` change log can be found on the official [release notes]&#40;https://github.com/webpack-contrib/terser-webpack-plugin/releases/tag/v5.1.4&#41;.)

[comment]: <> (+ `webpack@5.44.0` change log can be found on the official [release notes]&#40;https://github.com/webpack/webpack/releases/tag/v5.44.0&#41;.)

[comment]: <> (## [5.7.2]&#40;https://github.com/WeAreAthlon/frontend-webpack-boilerplate/releases/tag/v5.7.1&#41;)

[comment]: <> (### 14/06/2021)

[comment]: <> (### Major Vesions Packages Updates)

[comment]: <> (+ `postcss-loader@6.1.0` from `5.x` new features and breaking changes can be found on the official [release notes]&#40;https://github.com/webpack-contrib/postcss-loader/releases/tag/v6.1.0&#41;.)

[comment]: <> (### Package Versions Update)

[comment]: <> (+ `postcss@8.3.2` change log can be found on the official [release notes]&#40;https://github.com/postcss/postcss/releases/tag/8.3.2&#41;.)

[comment]: <> (+ `sass-loader@12.1.0` change log can be found on the official [release notes]&#40;https://github.com/webpack-contrib/sass-loader/releases/tag/v12.1.0&#41;.)

[comment]: <> (## [5.7.1]&#40;https://github.com/WeAreAthlon/frontend-webpack-boilerplate/releases/tag/v5.7.1&#41;)

[comment]: <> (### 10/06/2021)

[comment]: <> (### Major Vesions Packages Updates)

[comment]: <> (+ `sass-loader@12.0.0` from `11.x` new features and breaking changes can be found on the official [release notes]&#40;https://github.com/webpack-contrib/sass-loader/releases/tag/v12.0.0&#41;.)

[comment]: <> (### Package Versions Update)

[comment]: <> (+ `@babel/core@7.14.5` change log can be found on the official [release notes]&#40;https://github.com/babel/babel/releases/tag/v7.14.5&#41;.)

[comment]: <> (+ `@babel/preset-env@7.14.5` change log can be found on the official [release notes]&#40;https://github.com/babel/babel/releases/tag/v7.14.5&#41;.)

[comment]: <> (+ `autoprefixer@10.2.6` change log can be found on the official [release notes]&#40;https://github.com/postcss/autoprefixer/releases/tag/10.2.6&#41;.)

[comment]: <> (+ `css-minimizer-webpack-plugin@3.0.1` change log can be found on the official [release notes]&#40;https://github.com/webpack-contrib/css-minimizer-webpack-plugin/releases/tag/v3.0.1&#41;.)

[comment]: <> (+ `eslint-plugin-import@2.23.4` change log can be found on the official [release notes]&#40;https://github.com/yannickcr/eslint-plugin-react/releases/tag/v7.23.4&#41;.)

[comment]: <> (+ `eslint-plugin-react@7.24.0` change log can be found on the official [release notes]&#40;https://github.com/yannickcr/eslint-plugin-react/releases/tag/v7.24.0&#41;.)

[comment]: <> (+ `eslint@7.28.0` change log can be found on the official [release notes]&#40;https://github.com/eslint/eslint/releases/tag/v7.28.0&#41;.)

[comment]: <> (+ `postcss@8.3.1` change log can be found on the official [release notes]&#40;https://github.com/postcss/postcss/releases/tag/8.3.1&#41;.)

[comment]: <> (+ `sass@1.34.1` change log can be found on the official [release notes]&#40;https://github.com/sass/dart-sass/releases/tag/1.34.1&#41;.)

[comment]: <> (+ `terser-webpack-plugin@5.1.3` change log can be found on the official [release notes]&#40;https://github.com/webpack-contrib/terser-webpack-plugin/releases/tag/v5.1.3&#41;.)

[comment]: <> (+ `webpack-cli@4.7.2` change log can be found on the official [release notes]&#40;https://github.com/webpack/webpack-cli/releases/tag/v4.7.2&#41;.)

[comment]: <> (+ `webpack-merge@5.8.0` change log can be found on the official [release notes]&#40;https://github.com/survivejs/webpack-merge/blob/master/CHANGELOG.md#580--2021-06-07&#41;.)

[comment]: <> (+ `webpack@5.38.1` change log can be found on the official [release notes]&#40;https://github.com/webpack/webpack/releases/tag/v5.38.1&#41;.)

[comment]: <> (## [5.7.0]&#40;https://github.com/WeAreAthlon/frontend-webpack-boilerplate/releases/tag/v5.7.0&#41;)

[comment]: <> (### 25/05/2021)

[comment]: <> (### Node Version Notes)

[comment]: <> (* The current release supports the following list of node versions: `^12 || >=14`. All other versions have no security updates anymore.)

[comment]: <> (  * Updated the _README_ to note this change.)

[comment]: <> (### Major Vesions Packages Updates)

[comment]: <> (+ `copy-webpack-plugin@9.0.0` from `8.x` new features and breaking changes can be found on the official [release notes]&#40;https://github.com/webpack-contrib/copy-webpack-plugin/releases/tag/v9.0.0&#41;.)

[comment]: <> (+ `css-minimizer-webpack-plugin@3.0.0` from `2.x` new features and breaking changes can be found on the official [release notes]&#40;https://github.com/webpack-contrib/css-minimizer-webpack-plugin/releases/tag/v3.0.0&#41;.)

[comment]: <> (### Package Versions Update)

[comment]: <> (+ `@babel/core@7.14.3` change log can be found on the official [release notes]&#40;https://github.com/babel/babel/releases/tag/v7.14.3&#41;.)

[comment]: <> (+ `@babel/preset-env@7.14.2` change log can be found on the official [release notes]&#40;https://github.com/babel/babel/releases/tag/v7.14.2&#41;.)

[comment]: <> (+ `css-loader@5.2.6` change log can be found on the official [release notes]&#40;https://github.com/webpack-contrib/css-loader/releases/tag/v5.2.6&#41;.)

[comment]: <> (+ `eslint-plugin-import@2.23.3` change log can be found on the official [release notes]&#40;https://github.com/yannickcr/eslint-plugin-import/releases/tag/v7.23.3&#41;.)

[comment]: <> (+ `eslint@7.27.0` change log can be found on the official [release notes]&#40;https://github.com/eslint/eslint/releases/tag/v7.27.0&#41;.)

[comment]: <> (+ `postcss-loader@5.3.0` change log can be found on the official [release notes]&#40;https://github.com/webpack-contrib/postcss-loader/releases/tag/v5.3.0&#41;.)

[comment]: <> (+ `postcss@8.3.0` change log can be found on the official [release notes]&#40;https://github.com/postcss/postcss/releases/tag/8.3.0&#41;.)

[comment]: <> (+ `sass-loader@11.1.1` change log can be found on the official [release notes]&#40;https://github.com/webpack-contrib/sass-loader/releases/tag/v11.1.1&#41;.)

[comment]: <> (+ `sass@1.34.0` change log can be found on the official [release notes]&#40;https://github.com/sass/dart-sass/releases/tag/1.34.0&#41;.)

[comment]: <> (+ `terser-webpack-plugin@5.1.2` change log can be found on the official [release notes]&#40;https://github.com/webpack-contrib/terser-webpack-plugin/releases/tag/v5.1.2&#41;.)

[comment]: <> (+ `webpack-bundle-analyzer@4.4.2` change log can be found on the official [release notes]&#40;https://github.com/webpack-contrib/webpack-bundle-analyzer/blob/master/CHANGELOG.md#442&#41;)

[comment]: <> (+ `webpack@5.37.1` change log can be found on the official [release notes]&#40;https://github.com/webpack/webpack/releases/tag/v5.37.1&#41;.)

[comment]: <> (## [5.6.1]&#40;https://github.com/WeAreAthlon/frontend-webpack-boilerplate/releases/tag/v5.6.1&#41;)

[comment]: <> (### 10/05/2021)

[comment]: <> (## Maintenance Release)

[comment]: <> (### Package Versions Update)

[comment]: <> (+ `@babel/core@7.14.0` change log can be found on the official [release notes]&#40;https://github.com/babel/babel/releases/tag/v7.14.0&#41;.)

[comment]: <> (+ `@babel/preset-env@7.14.1` change log can be found on the official [release notes]&#40;https://github.com/babel/babel/releases/tag/v7.14.0&#41;.)

[comment]: <> (+ `css-loader@5.2.4` change log can be found on the official [release notes]&#40;https://github.com/webpack-contrib/css-loader/releases/tag/v5.2.4&#41;.)

[comment]: <> (+ `eslint:7.26.0` change log can be found on the official [release notes]&#40;https://github.com/eslint/eslint/releases/tag/v7.26.0&#41;.)

[comment]: <> (+ `mini-css-extract-plugin@1.6.0` change log can be found on the official [release notes]&#40;https://github.com/webpack-contrib/mini-css-extract-plugin/releases/tag/v1.6.0&#41;.)

[comment]: <> (+ `sass@1.32.12` change log can be found on the official [release notes]&#40;https://github.com/sass/dart-sass/releases/tag/1.32.12&#41;.)

[comment]: <> (+ `webpack-cli@4.7.0` change log can be found on the official [release notes]&#40;https://github.com/webpack/webpack-cli/releases/tag/v4.7.0&#41;.)

[comment]: <> (+ `webpack@5.36.2` change log can be found on the official [release notes]&#40;https://github.com/webpack/webpack/releases/tag/v5.36.2&#41;.)

[comment]: <> (## [5.6.0]&#40;https://github.com/WeAreAthlon/frontend-webpack-boilerplate/releases/tag/v5.6.0&#41;)

[comment]: <> (### 15/04/2021)

[comment]: <> (### Major Vesions Packages Updates)

[comment]: <> (+ `css-minimizer-webpack-plugin@2.0.0` from `1.x` new features and breaking changes can be found on the official [release notes]&#40;https://github.com/webpack-contrib/css-minimizer-webpack-plugin/releases/tag/v2.0.0&#41;.)

[comment]: <> (### Packages Versions Update)

[comment]: <> (+ `@babel/core@7.13.15` change log can be found on the official [release notes]&#40;https://github.com/babel/babel/releases/tag/v7.13.15&#41;.)

[comment]: <> (+ `@babel/preset-env@7.13.15` change log can be found on the official [release notes]&#40;https://github.com/babel/babel/releases/tag/v7.13.15&#41;.)

[comment]: <> (+ `copy-webpack-plugin@8.1.1` change log can be found on the official [release notes]&#40;https://github.com/webpack-contrib/copy-webpack-plugin/releases/tag/v8.1.1&#41;.)

[comment]: <> (+ `css-loader@5.2.1` change log can be found on the official [release notes]&#40;https://github.com/webpack-contrib/css-loader/releases/tag/v5.2.1&#41;.)

[comment]: <> (+ `eslint@7.24.0` change log can be found on the official [release notes]&#40;https://github.com/eslint/eslint/releases/tag/v7.24.0&#41;.)

[comment]: <> (+ `eslint-plugin-react@7.23.2` change log can be found on the official [release notes]&#40;https://github.com/yannickcr/eslint-plugin-react/releases/tag/v7.23.2&#41;.)

[comment]: <> (+ `mini-css-extract-plugin@1.4.1` change log can be found on the official [release notes]&#40;https://github.com/webpack-contrib/mini-css-extract-plugin/releases/tag/v1.4.1&#41;.)

[comment]: <> (+ `postcss@8.2.10` change log can be found on the official [release notes]&#40;https://github.com/postcss/postcss/releases/tag/8.2.10&#41;.)

[comment]: <> (+ `sass-loader@11.0.1` change log can be found on the official [release notes]&#40;https://github.com/webpack-contrib/sass-loader/releases/tag/v11.0.1&#41;.)

[comment]: <> (+ `webpack@5.32.0` change log can be found on the official [release notes]&#40;https://github.com/webpack/webpack/releases/tag/v5.32.0&#41;.)

[comment]: <> (+ `webpack-bundle-analyzer@4.4.1` change log can be found on the official [release notes]&#40;https://github.com/webpack-contrib/webpack-bundle-analyzer/blob/master/CHANGELOG.md#441&#41;)

[comment]: <> (+ `webpack-cli@4.6.0` change log can be found on the official [release notes]&#40;https://github.com/webpack/webpack-cli/releases/tag/v4.6.0&#41;.)

[comment]: <> (## [5.5.0]&#40;https://github.com/WeAreAthlon/frontend-webpack-boilerplate/releases/tag/v5.5.0&#41;)

[comment]: <> (### 23/03/2021)

[comment]: <> (### Major Vesions Packages Updates)

[comment]: <> (+ `copy-webpack-plugin@8.1.0` from `7.x` new features and breaking changes can be found on the official [release notes]&#40;https://github.com/webpack-contrib/copy-webpack-plugin/releases/tag/v8.0.0&#41;.)

[comment]: <> (+ `imagemin-svgo@9.0.0` from `8.x` new features can be found on the official [release notes]&#40;https://github.com/imagemin/imagemin-svgo/releases/tag/v9.0.0&#41;.)

[comment]: <> (  + **Important Note** - the new version of `imagemin-svgo` requires change in the configuration in the `wepback.config.js` - the way plugin configurations are being passed.)

[comment]: <> (### Packages Versions Update)

[comment]: <> (+ `ajv@7.2.3` change log can be found on the official [release notes]&#40;https://github.com/epoberezkin/ajv/releases/tag/v7.2.3&#41;.)

[comment]: <> (+ `@babel/core@7.13.10` change log can be found on the official [release notes]&#40;https://github.com/babel/babel/releases/tag/v7.13.10&#41;.)

[comment]: <> (+ `@babel/preset-env@7.13.12` change log can be found on the official [release notes]&#40;https://github.com/babel/babel/releases/tag/v7.13.12&#41;.)

[comment]: <> (+ `css-loader@5.1.3` change log can be found on the official [release notes]&#40;https://github.com/webpack-contrib/css-loader/releases/tag/v5.1.3&#41;.)

[comment]: <> (+ `css-minimizer-webpack-plugin@1.3.0` change log can be found on the official [release notes]&#40;https://github.com/webpack-contrib/css-minimizer-webpack-plugin/releases/tag/v1.3.0&#41;.)

[comment]: <> (+ `eslint@7.22.0` change log can be found on the official [release notes]&#40;https://github.com/eslint/eslint/releases/tag/v7.22.0&#41;.)

[comment]: <> (+ `html-webpack-plugin@5.3.1` change log can be found on the official [release notes]&#40;https://github.com/jantimon/html-webpack-plugin/blob/main/CHANGELOG.md#531-2021-03-09&#41;.)

[comment]: <> (+ `postcss@8.2.8` change log can be found on the official [release notes]&#40;https://github.com/postcss/postcss/releases/tag/8.2.9&#41;.)

[comment]: <> (+ `postcss-loader@5.2.0` change log can be found on the official [release notes]&#40;https://github.com/webpack-contrib/postcss-loader/releases/tag/v5.2.0&#41;.)

[comment]: <> (+ `webpack@5.27.2` change log can be found on the official [release notes]&#40;https://github.com/webpack/webpack/releases/tag/v5.27.2&#41;.)

[comment]: <> (## [5.4.0]&#40;https://github.com/WeAreAthlon/frontend-webpack-boilerplate/releases/tag/v5.4.0&#41;)

[comment]: <> (### 07/03/2021)

[comment]: <> (### Updates)

[comment]: <> (* **Note** Remove the `src/templates` directory and place the templates directly in `src` to keep assets files path sycned between src and dist paths for better development UX.)

[comment]: <> (* Update loading priority - compromise in favor of loading `SVG` background images in SASS/PostCSS instead of `SVG` Fonts.)

[comment]: <> (  * To configure loading SVG fonts instead of SVG background add `svg` extension in `url-loader` for fonts extensions.)

[comment]: <> (* Update demo HTML template)

[comment]: <> (  * Document `<title/>`)

[comment]: <> (  * Base font size)

[comment]: <> (  * Deleted `.svg` font file.)

[comment]: <> (### Packages Versions Update)

[comment]: <> (+ `@babel/core@7.13.8` change log can be found on the official [release notes]&#40;https://github.com/babel/babel/releases/tag/v7.13.8&#41;.)

[comment]: <> (+ `@babel/preset-env@7.13.9` change log can be found on the official [release notes]&#40;https://github.com/babel/babel/releases/tag/v77.13.9&#41;.)

[comment]: <> (+ `autoprefixer@10.2.5` change log can be found on the official [release notes]&#40;https://github.com/postcss/autoprefixer/releases/tag/10.2.5&#41;.)

[comment]: <> (+ `ajv@7.2.1` change log can be found on the official [release notes]&#40;https://github.com/epoberezkin/ajv/releases/tag/v7.2.1&#41;.)

[comment]: <> (+ `css-loader@5.1.1` change log can be found on the official [release notes]&#40;https://github.com/webpack-contrib/css-loader/releases/tag/v5.1.1&#41;.)

[comment]: <> (+ `eslint@7.21.0` change log can be found on the official [release notes]&#40;https://github.com/eslint/eslint/releases/tag/v7.21.0&#41;.)

[comment]: <> (+ `html-webpack-plugin@5.3.0` change log can be found on the official [release notes]&#40;https://github.com/jantimon/html-webpack-plugin/blob/main/CHANGELOG.md#530-2021-03-07&#41;.)

[comment]: <> (+ `mini-css-extract-plugin@1.3.9` change log can be found on the official [release notes]&#40;https://github.com/webpack-contrib/mini-css-extract-plugin/releases/tag/v1.3.9&#41;.)

[comment]: <> (+ `postcss@8.2.7` change log can be found on the official [release notes]&#40;https://github.com/postcss/postcss/releases/tag/8.2.7&#41;.)

[comment]: <> (* `postcss-loader@5.1.0` change log can be found on the official [release notes]&#40;https://github.com/webpack-contrib/postcss-loader/releases/tag/v5.1.0&#41;.)

[comment]: <> (+ `sass@1.32.8` change log can be found on the official [release notes]&#40;https://github.com/sass/dart-sass/releases/tag/1.32.8&#41;.)

[comment]: <> (+ `webpack@5.24.4` change log can be found on the official [release notes]&#40;https://github.com/webpack/webpack/releases/tag/v5.24.4&#41;.)

[comment]: <> (## [5.3.0]&#40;https://github.com/WeAreAthlon/frontend-webpack-boilerplate/releases/tag/v5.3.0&#41;)

[comment]: <> (### 16/02/2021)

[comment]: <> (### Documentation Updates)

[comment]: <> (* _README_ documentacion available as HTML version in the demo page [index.html]&#40;src/templates/index.html&#41;)

[comment]: <> (  * Built demo page is available on https://weareathlon.github.io/frontend-webpack-boilerplate/ )

[comment]: <> (### Packages Major Version Updates)

[comment]: <> (+ `html-webpack-plugin@5.0.1` from `4.x` new features can be found on the official [release notes]&#40;https://github.com/jantimon/html-webpack-plugin/blob/master/CHANGELOG.md#500-2021-02-03&#41;.)

[comment]: <> (+ `postcss-loader@5.0.0` from `4.x` new features can be found on the official [release notes]&#40;https://github.com/webpack-contrib/postcss-loader/releases/tag/v5.0.0&#41;.)

[comment]: <> (+ `sass-loader@11.0.1` from `10.x` new features can be found on the official [release notes]&#40;https://github.com/webpack-contrib/sass-loader/releases/tag/v11.0.0&#41;. )

[comment]: <> (### Package Versions Update)

[comment]: <> (+ `ajv@7.1.0` change log can be found on the official [release notes]&#40;https://github.com/epoberezkin/ajv/releases/tag/v7.1.0&#41;.)

[comment]: <> (+ `autoprefixer@10.2.4` change log can be found on the official [release notes]&#40;https://github.com/postcss/autoprefixer/releases/tag/10.2.4&#41;.)

[comment]: <> (+ `@babel/preset-env@7.12.16` change log can be found on the official [release notes]&#40;https://github.com/babel/babel/releases/tag/v7.12.16&#41;.)

[comment]: <> (+ `@babel/core@7.12.16` change log can be found on the official [release notes]&#40;https://github.com/babel/babel/releases/tag/v7.12.16&#41;.)

[comment]: <> (+ `eslint@7.20.0` change log can be found on the official [release notes]&#40;https://github.com/eslint/eslint/releases/tag/v7.20.0&#41;.)

[comment]: <> (+ `css-loader@5.0.2` change log can be found on the official [release notes]&#40;https://github.com/webpack-contrib/css-loader/releases/tag/v5.0.2&#41;.)

[comment]: <> (+ `mini-css-extract-plugin@1.3.7` change log can be found on the official [release notes]&#40;https://github.com/webpack-contrib/mini-css-extract-plugin/releases/tag/v1.3.7&#41;.)

[comment]: <> (+ `postcss@8.2.6` change log can be found on the official [release notes]&#40;https://github.com/postcss/postcss/releases/tag/8.2.6&#41;.)

[comment]: <> (+ `sass@1.32.7` change log can be found on the official [release notes]&#40;https://github.com/sass/dart-sass/releases/tag/1.32.7&#41;.)

[comment]: <> (+ `webpack@5.22.0` change log can be found on the official [release notes]&#40;https://github.com/webpack/webpack/releases/tag/v5.22.0&#41;.)

[comment]: <> (+ `webpack-bundle-analyzer@4.4.0` change log can be found on the official [release notes]&#40;https://github.com/webpack-contrib/webpack-bundle-analyzer/blob/master/CHANGELOG.md#440&#41;.)

[comment]: <> (+ `webpack-cli@4.5.0` change log can be found on the official [release notes]&#40;https://github.com/webpack/webpack-cli/releases/tag/v4.5.0&#41;.)

[comment]: <> (## [5.2.2]&#40;https://github.com/WeAreAthlon/frontend-webpack-boilerplate/releases/tag/v5.2.2&#41;)

[comment]: <> (### 15/01/2021)

[comment]: <> (## Maintenance Release)

[comment]: <> (* Updated _README_)

[comment]: <> (  * Added Table of Contents &#40;_TOC_&#41;)

[comment]: <> (### Package Versions Update)

[comment]: <> (+ `autoprefixer@10.2.1` change log can be found on the official [release notes]&#40;https://github.com/postcss/autoprefixer/releases/tag/10.2.1&#41;.)

[comment]: <> (+ `css-minimizer-webpack-plugin@1.2.0` change log can be found on the official [release notes]&#40;https://github.com/webpack-contrib/css-minimizer-webpack-plugin/releases/tag/v1.2.0&#41;.)

[comment]: <> (+ `image-minimizer-webpack-plugin@2.2.0` change log can be found on the official [release notes]&#40;https://github.com/webpack-contrib/image-minimizer-webpack-plugin/releases/tag/v2.2.0&#41;.)

[comment]: <> (+ `mini-css-extract-plugin@1.3.4` change log can be found on the official [release notes]&#40;https://github.com/webpack-contrib/mini-css-extract-plugin/releases/tag/v1.3.4&#41;.)

[comment]: <> (+ `postcss@8.2.4` change log can be found on the official [release notes]&#40;https://github.com/postcss/postcss/releases/tag/8.2.4&#41;.)

[comment]: <> (+ `sass@1.32.4` change log can be found on the official [release notes]&#40;https://github.com/sass/dart-sass/releases/tag/1.32.4&#41;.)

[comment]: <> (+ `sass-loader@10.1.1` change log can be found on the official [release notes]&#40;https://github.com/webpack-contrib/sass-loader/releases/tag/v10.1.1&#41;.)

[comment]: <> (+ `terser-webpack-plugin@5.1.1` change log can be found on the official [release notes]&#40;https://github.com/webpack-contrib/terser-webpack-plugin/releases/tag/v5.1.1&#41;.)

[comment]: <> (+ `webpack@5.15.0` change log can be found on the official [release notes]&#40;https://github.com/webpack/webpack/releases/tag/v5.15.0&#41;.)

[comment]: <> (+ `webpack-dev-server@3.11.2` change log can be found on the official [release notes]&#40;https://github.com/webpack/webpack-dev-server/releases/tag/v3.11.2&#41;.)

[comment]: <> (## [5.2.1]&#40;https://github.com/WeAreAthlon/frontend-webpack-boilerplate/releases/tag/v5.2.1&#41;)

[comment]: <> (### 07/01/2021)

[comment]: <> (## Maintenance Release)

[comment]: <> (* Security dependency updates.)

[comment]: <> (* _README.md_ minor updates and badges updates.)

[comment]: <> (### Package Versions Update)

[comment]: <> (+ `ajv@7.0.3` change log can be found on the official [release notes]&#40;https://github.com/epoberezkin/ajv/releases/tag/v7.0.3&#41;.)

[comment]: <> (+ `autoprefixer@10.2.0` change log can be found on the official [release notes]&#40;https://github.com/postcss/autoprefixer/releases/tag/10.2.0&#41;.)

[comment]: <> (+ `eslint@7.17.0` change log can be found on the official [release notes]&#40;https://github.com/eslint/eslint/releases/tag/v7.17.0&#41;.)

[comment]: <> (+ `eslint-plugin-react@7.22.0` change log can be found on the official [release notes]&#40;https://github.com/yannickcr/eslint-plugin-react/releases/tag/v7.22.0&#41;.)

[comment]: <> (+ `html-webpack-plugin@4.5.1` change log can be found on the official [release notes]&#40;https://github.com/jantimon/html-webpack-plugin/releases/tag/v4.5.1&#41;.)

[comment]: <> (+ `image-minimizer-webpack-plugin@2.1.0` change log can be found on the official [release notes]&#40;https://github.com/webpack-contrib/image-minimizer-webpack-plugin/releases/tag/v2.1.0&#41;.)

[comment]: <> (+ `postcss@8.2.3` change log can be found on the official [release notes]&#40;https://github.com/postcss/postcss/releases/tag/8.2.3&#41;.)

[comment]: <> (+ `sass@1.32.2` change log can be found on the official [release notes]&#40;https://github.com/sass/dart-sass/releases/tag/1.32.2&#41;.)

[comment]: <> (+ `webpack@5.11.1` change log can be found on the official [release notes]&#40;https://github.com/webpack/webpack/releases/tag/v5.11.1&#41;.)

[comment]: <> (+ `webpack-cli@4.3.1` change log can be found on the official [release notes]&#40;https://github.com/webpack/webpack-cli/releases/tag/v4.3.1&#41;.)

[comment]: <> (+ `webpack-dev-server@3.11.1` change log can be found on the official [release notes]&#40;https://github.com/webpack/webpack-dev-server/releases/tag/v3.11.1&#41;.)

[comment]: <> (+ `webpack-merge@5.7.3` change log can be found on the official [release notes]&#40;https://github.com/survivejs/webpack-merge/blob/master/CHANGELOG.md#573--2020-12-22&#41;.)

[comment]: <> (## [5.2.0]&#40;https://github.com/WeAreAthlon/frontend-webpack-boilerplate/releases/tag/v5.2.0&#41;)

[comment]: <> (### 22/12/2020)

[comment]: <> (### New Features)

[comment]: <> (* Added [Webpack Bundle Analyzer]&#40;https://www.npmjs.com/package/webpack-bundle-analyzer&#41; - _Visualize size of webpack output files with an interactive zoomable treemap._)

[comment]: <> (  * You can use this by running `npm run stats` - this will open the visualisaion on the default configuraiton URL `localhost:8888`, you can change this following the package documentation.)

[comment]: <> (* Added `npm` script `bundle` for more convinient usage in _Docker / Docker Compose_ development environment.)

[comment]: <> (### Updates)

[comment]: <> (* Moved `sass-lint` path configuration from npm script to the `.sasslintrc` file due. See [Lint of styles &#40;SASS&#41; doesn't work]&#40;https://github.com/WeAreAthlon/frontend-webpack-boilerplate/issues/22&#41;)

[comment]: <> (### Packages Major Version Updates)

[comment]: <> (+ `ajv@7.0.2` from `6.x` new features can be found on the official [release notes]&#40;https://github.com/ajv-validator/ajv/releases/tag/v7.0.0&#41;.)

[comment]: <> (+ `copy-webpack-plugin@7.0.0` from `6.x` new features can be found on the official [release notes]&#40;https://github.com/webpack-contrib/copy-webpack-plugin/releases/tag/v7.0.0&#41;.)

[comment]: <> (+ `image-minimizer-webpack-plugin@2.0.0` from `1.x` ew features can be found on the official [release notes]&#40;https://github.com/webpack-contrib/image-minimizer-webpack-plugin/releases/tag/v2.0.0&#41;.)

[comment]: <> (### Package Version Updates)

[comment]: <> (+ `@babel/preset-env@7.12.11` change log can be found on the official [release notes]&#40;https://github.com/babel/babel/releases/tag/v7.12.11&#41;.)

[comment]: <> (+ `@babel/core@7.12.10` change log can be found on the official [release notes]&#40;https://github.com/babel/babel/releases/tag/v7.12.11&#41;.)

[comment]: <> (+ `autoprefixer@10.1.0` change log can be found on the official [release notes]&#40;https://github.com/postcss/autoprefixer/releases/tag/10.1.0&#41;.)

[comment]: <> (+ `eslint@7.16.0` change log can be found on the official [release notes]&#40;https://github.com/eslint/eslint/releases/tag/v7.16.0&#41;.)

[comment]: <> (+ `mini-css-extract-plugin@1.3.3` change log can be found on the official [release notes]&#40;https://github.com/webpack-contrib/mini-css-extract-plugin/releases/tag/v1.3.3&#41;.)

[comment]: <> (+ `postcss@8.2.1` change log can be found on the official [release notes]&#40;https://github.com/postcss/postcss/releases/tag/8.2.1&#41;.)

[comment]: <> (+ `sass@1.30.0` change log can be found on the official [release notes]&#40;https://github.com/sass/dart-sass/releases/tag/1.30.0&#41;.)

[comment]: <> (+ `webpack@5.11.0` change log can be found on the official [release notes]&#40;https://github.com/webpack/webpack/releases/tag/v5.11.0&#41;.)

[comment]: <> (+ `webpack-merge@5.7.2` change log can be found on the official [change log]&#40;https://github.com/survivejs/webpack-merge/blob/master/CHANGELOG.md&#41;.)

[comment]: <> (## [5.1.0]&#40;https://github.com/WeAreAthlon/frontend-webpack-boilerplate/releases/tag/v5.1.0&#41;)

[comment]: <> (### 01/12/2020)

[comment]: <> (### New Features)

[comment]: <> (* Image optimisation is now done using [`image-minimizer-webpack-plugin`]&#40;https://github.com/webpack-contrib/image-minimizer-webpack-plugin&#41;)

[comment]: <> (  * We have **removed** te usage of the [`imagemin-webpack-plugin`]&#40;https://github.com/Klathmon/imagemin-webpack-plugin&#41;)

[comment]: <> (### Updates)

[comment]: <> (* Updated `webpack.config.js` to configure the new image optimisation plugin.)

[comment]: <> (* Updated *README* file with more clear features description and language style fixes.)

[comment]: <> (### Added New Packages)

[comment]: <> (* [`image-minimizer-webpack-plugin@1.0.0`]&#40;https://github.com/webpack-contrib/image-minimizer-webpack-plugin&#41; - Plugin and Loader for webpack to optimize &#40;compress&#41; all images using imagemin. Do not worry about size of images, now they are always optimized/compressed.)

[comment]: <> (* [`imagemin`]&#40;https://github.com/imagemin/imagemin&#41; image optimisation packages for *loseless* image optimisation:)

[comment]: <> (  * [`imagemin-jpegtran@7.0.0`]&#40;https://www.npmjs.com/package/imagemin-jpegtran/v/7.0.0&#41; - for optimizing *JPG* images)

[comment]: <> (  * [`imagemin-optipng@8.0.0`]&#40;https://www.npmjs.com/package/imagemin-optipng&#41; - for optimizing *PNG* images)

[comment]: <> (  * [`imagemin-gifsicle@7.0.0`]&#40;https://www.npmjs.com/package/imagemin-gifsicle&#41; - for optimizing *GIF* images)

[comment]: <> (  * [`imagemin-svgo@8.0.0`]&#40;https://www.npmjs.com/package/imagemin-svgo&#41; - for optimizing *SVG* images)

[comment]: <> (### Removed Packags)

[comment]: <> (* [`imagemin-webpack-plugin`]&#40;https://github.com/Klathmon/imagemin-webpack-plugin&#41;)

[comment]: <> (### Package Version Updates)

[comment]: <> (* `autoprefixer@10.0.4` change log can be found on the official [release notes]&#40;https://github.com/postcss/autoprefixer/releases/tag/10.0.4&#41;.)

[comment]: <> (* `@babel/core@7.12.9` change log can be found on the official [release notes]&#40;https://github.com/babel/babel/releases/tag/v7.12.9&#41;.)

[comment]: <> (* `@babel/preset-env@7.12.7` change log can be found on the official [release notes]&#40;https://github.com/babel/babel/releases/tag/v7.12.9&#41;.)

[comment]: <> (* `copy-webpack-plugin@6.3.0` change log can be found on the official [release notes]&#40;https://github.com/webpack-contrib/copy-webpack-plugin/releases/tag/v6.3.0&#41;.)

[comment]: <> (* `css-loader@5.0.1` change log can be found on the official [release notes]&#40;https://github.com/webpack-contrib/postcss-loader/releases/tag/v5.0.1&#41;.)

[comment]: <> (* `eslint-config-airbnb@18.2.1` change log can be found on the official [release notes]&#40;https://github.com/airbnb/javascript/releases/tag/eslint-config-airbnb-v18.2.1&#41;. )

[comment]: <> (* `eslint@7.14.0` change log can be found on the official [release notes]&#40;https://github.com/eslint/eslint/releases/tag/v7.14.0&#41;.)

[comment]: <> (* `mini-css-extract-plugin@1.3.0` change log can be found on the official [release notes]&#40;https://github.com/webpack-contrib/mini-css-extract-plugin/releases/tag/v1.3.0&#41;.)

[comment]: <> (* `postcss@8.1.6` change log can be found on the official [release notes]&#40;https://github.com/postcss/postcss/releases/tag/8.1.6&#41;.)

[comment]: <> (* `postcss-loader@4.1.0` change log can be found on the official [release notes]&#40;https://github.com/webpack-contrib/postcss-loader/releases/tag/v4.1.0&#41;.)

[comment]: <> (* `sass@1.29.0` change log can be found on the official [release notes]&#40;https://github.com/sass/dart-sass/releases/tag/1.29.0&#41;.)

[comment]: <> (* `sass-loader@10.1.0` change log can be found on the official [release notes]&#40;https://github.com/webpack-contrib/sass-loader/releases/tag/v10.1.0&#41;.)

[comment]: <> (* `webpack@5.9.0` change log can be found on the official [release notes]&#40;https://github.com/webpack/webpack/releases/tag/v5.9.0&#41;.)

[comment]: <> (* `webpack-cli@4.2.0` change log can be found on the official [release notes]&#40;https://github.com/webpack/webpack-cli/releases/tag/v4.2.0&#41;.)

[comment]: <> (* `webpack-merge@5.4.0` change log can be found on the official [change log]&#40;https://github.com/survivejs/webpack-merge/blob/master/CHANGELOG.md&#41;.)

[comment]: <> (## [5.0.1]&#40;https://github.com/WeAreAthlon/frontend-webpack-boilerplate/releases/tag/v5.0.1&#41;)

[comment]: <> (### 28/10/2020)

[comment]: <> (### Updates)

[comment]: <> (* Fix `.travis.yml` configuration warnings.)

[comment]: <> (* Fix varous spelling errors.)

[comment]: <> (* Development wepback configuration cleanup.)

[comment]: <> (### Packages Version Updates)

[comment]: <> (* `file-loader@6.2.0` change log can be found on the official [release notes]&#40;https://github.com/webpack-contrib/file-loader/releases/tag/v6.2.0&#41;.)

[comment]: <> (* `mini-css-extract-plugin@1.2.1` change log can be found on the official [release notes]&#40;https://github.com/webpack-contrib/mini-css-extract-plugin/releases/tag/v1.2.1&#41;.)

[comment]: <> (* `terser-webpack-plugin@5.0.3` change log can be found on the official [release notes]&#40;https://github.com/webpack-contrib/terser-webpack-plugin/releases/tag/v5.0.3&#41;.)

[comment]: <> (* `webpack@5.3.1` change log can be found on the official [release notes]&#40;https://github.com/webpack/webpack/releases/tag/v5.3.1&#41;.)

[comment]: <> (## [5.0.0]&#40;https://github.com/WeAreAthlon/frontend-webpack-boilerplate/releases/tag/v5.0.0&#41;)

[comment]: <> (### 27/10/2020)

[comment]: <> (### New Features)

[comment]: <> (* Configurable **browsers versions support**. It uses [`browserslist`]&#40;https://github.com/browserslist/browserslist#full-list&#41; - just specify the browsers you want to support in the `package.json` file for `browserslist`.)

[comment]: <> (* Configuration per **environment**)

[comment]: <> (  * `development` - [`sourcemaps`]&#40;https://webpack.js.org/configuration/devtool/&#41;, [`browser synced developmentment server`]&#40;https://webpack.js.org/configuration/dev-server/&#41;)

[comment]: <> (  * `production` - [`minification`]&#40;https://webpack.js.org/plugins/terser-webpack-plugin/&#41;, [`sourcemaps`]&#40;https://webpack.js.org/configuration/devtool/&#41;)

[comment]: <> (* Automatic building of all template HTML files placed under `src/templates/`, no need to manually configure each file anymore.  )

[comment]: <> (* See the full [README]&#40;https://github.com/WeAreAthlon/frontend-webpack-boilerplate/blob/master/README.md&#41; file for all new features.)

[comment]: <> (### Breaking Changes)

[comment]: <> (* **Webpack** version update - support for [webpack 5]&#40;https://webpack.js.org/blog/2020-10-10-webpack-5-release/&#41;)

[comment]: <> (  * New `webpack` configuration files.)

[comment]: <> (  * Webpack configuration restructure - split to `development` and `production` configuration files.)

[comment]: <> (* Switched to `webpack-dev-server` instead of `browser-sync`.)

[comment]: <> (* Template files moved from `src/` to `src/templates/`.)

[comment]: <> (* Removed `npm run bundle` script - no need anymore.)

[comment]: <> (* JavaScript syntax cheker command changed from `lint-js` to `lint:js`.)

[comment]: <> (* SASS/PostCSS syntax cheker command changed from `lint-sass` to `lint:sass`.)

[comment]: <> (  * Configuration file is renamed from `.sass-lint.yml` to `.sasslintrc` for consistency.)

[comment]: <> (### Updates)

[comment]: <> (* `src/scss/app.scss` - grouped all demo page styles in a dedicated file called `demo.scss` for easer removal upon starting a new project.)

[comment]: <> (* Added example demo code in `src/js/demo.js`)

[comment]: <> (* Updated `README.md`)

[comment]: <> (### Removed Dependencies)

[comment]: <> (* `browser-sync` replaced with `webpack-dev-server`.)

[comment]: <> (* `browser-sync-webpack-plugin` no need anymore as `webpack-dev-server` is used for this purpose.)

[comment]: <> (* `cross-env` - not needed in this setup.)

[comment]: <> (* `cssnano` - not needed to be provided explicitly, it is now a dev dependency of `css-minimizer-webpack-plugin`.)

[comment]: <> (* `node-sass` - use `sass` instead.)

[comment]: <> (* `optimize-css-assets-webpack-plugin` - missing support for webpack 5, replaced with `css-minimizer-webpack-plugin`.)

[comment]: <> (* `style-loader` - no more support for inlining CSS with `<style>` tags.)

[comment]: <> (### New Dependencies)

[comment]: <> (* [`css-minimizer-webpack-plugin`]&#40;https://github.com/webpack-contrib/css-minimizer-webpack-plugin/&#41; support for `webpack 5`.)

[comment]: <> (* [`webpack-dev-server`]&#40;https://webpack.js.org/configuration/dev-server/&#41; user to simplify development process.)

[comment]: <> (### Packages Major Version Updates)

[comment]: <> (* `css-loader@5.0.0` from `4.x` new features can be found on the official [release notes]&#40;https://github.com/webpack-contrib/css-loader/releases/tag/v5.0.0&#41;.)

[comment]: <> (* `mini-css-extract-plugin@1.2.0` from `0.x` new features can be found on the official [release notes]&#40;https://github.com/webpack-contrib/mini-css-extract-plugin/releases/tag/v1.2.0&#41;)

[comment]: <> (* `style-loader@2.0.0` from `1.x` new features can be found on the official [release notes]&#40;https://github.com/webpack-contrib/style-loader/releases/tag/v2.0.0&#41;.)

[comment]: <> (* `terser-webpack-plugin@5.0.1` from `4.x` new features can be found on the official [release notes]&#40;https://github.com/webpack-contrib/terser-webpack-plugin/releases/tag/v5.0.1&#41;.)

[comment]: <> (* `webpack@5.2.0` from `4.x` new features can be found on the official [release notes]&#40;https://github.com/webpack/webpack/releases/tag/v5.2.0&#41;.)

[comment]: <> (* `webpack-cli@4.1.0` from `3.x` new features can be found on the official [release notes]&#40;https://github.com/webpack/webpack-cli/releases/tag/v4.1.0&#41;)

[comment]: <> (### Packages Minor Version Updates)

[comment]: <> (* `@babel/core@7.12.1` change log can be found on the official [release notes]&#40;https://github.com/babel/babel/releases/tag/v7.12.1&#41;.)

[comment]: <> (* `@babel/preset-env@7.12.1` change log can be found on the official [release notes]&#40;https://github.com/babel/babel/releases/tag/v7.12.1&#41;.)

[comment]: <> (* `ajv@6.12.6` change log can be found on the official [release notes]&#40;https://github.com/epoberezkin/ajv/releases/tag/v6.12.6&#41;.)

[comment]: <> (* `copy-webpack-plugin@6.2.1` change log can be found on the official [release notes]&#40;https://github.com/webpack-contrib/copy-webpack-plugin/releases/tag/v6.2.1&#41;.)

[comment]: <> (* `eslint@7.12.1` change log can be found on the official [release notes]&#40;https://github.com/eslint/eslint/releases/tag/v7.12.1&#41;.)

[comment]: <> (* `eslint-plugin-react@7.21.4` change log can be found on the official [release notes]&#40;https://github.com/yannickcr/eslint-plugin-react/releases/tag/v7.21.4&#41;.)

[comment]: <> (* `eslint-plugin-react-hooks` change log can be found on the official [release notes]&#40;https://www.npmjs.com/package/eslint-plugin-react-hooks&#41;.)

[comment]: <> (* `eslint-plugin-jsx-a11y@6.4.1` change log can be found on the official [release notes]&#40;https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/releases/tag/v6.4.1&#41;)

[comment]: <> (* `file-loader@6.1.1` change log can be found on the official [release notes]&#40;https://github.com/webpack-contrib/file-loader/releases/tag/v6.1.1&#41;.)

[comment]: <> (* `postcss@8.1.4` change log can be found on the official [release notes]&#40;https://github.com/postcss/postcss/releases/tag/8.1.4&#41;.)

[comment]: <> (* `postcss-loader@4.0.4` change log can be found on the official [release notes]&#40;https://github.com/webpack-contrib/postcss-loader/releases/tag/v4.0.4&#41;.)

[comment]: <> (* `sass@1.27.0` change log can be found on the official [release notes]&#40;https://github.com/sass/dart-sass/releases/tag/1.27.0&#41;.)

[comment]: <> (* `sass-loader@10.0.4` change log can be found on the official [release notes]&#40;https://github.com/webpack-contrib/sass-loader/releases/tag/v10.0.4&#41;.)

[comment]: <> (* `url-loader@4.1.1` change log can be found on the official [release notes]&#40;https://github.com/webpack-contrib/url-loader/releases/tag/v4.1.1&#41;.)

[comment]: <> (## [4.5.0]&#40;https://github.com/WeAreAthlon/frontend-webpack-boilerplate/releases/tag/v4.5.0&#41;)

[comment]: <> (### 27/09/2020)

[comment]: <> (* Updated `README.md`)

[comment]: <> (### Node Version Notes)

[comment]: <> (* The current release supports the following list of node versions: `^10 || ^12 || >=14`. All other versions have no security updates anymore.)

[comment]: <> (### New dependencies)

[comment]: <> (* [`postcss`]&#40;https://github.com/postcss/postcss/releases/tag/8.0.0&#41; required by `autoprefixer@10.0.0`)

[comment]: <> (### Packages Major Version Updates)

[comment]: <> (* `autoprefixer@10.0.0` from `9.x` new features and braking changes can be found on the official [release notes]&#40;https://github.com/postcss/autoprefixer/releases/tag/10.0.0&#41;.)

[comment]: <> (* `postcss-loader@4.0.2` from `3.x` new features and braking changes can be found on the official [release notes]&#40;https://github.com/webpack-contrib/postcss-loader/releases/tag/v4.0.0&#41;.)

[comment]: <> (* `sass-loader@10.0.2` from `9.x` new features and braking changes can be found on the official [release notes]&#40;https://github.com/webpack-contrib/sass-loader/releases/tag/v9.0.3&#41;.)

[comment]: <> (### Packages Minor Version Updates)

[comment]: <> (* `copy-webpack-plugin@6.1.1` change log can be found on the official [release notes]&#40;https://github.com/webpack-contrib/copy-webpack-plugin/releases/tag/v6.1.1&#41;.)

[comment]: <> (* `eslint@7.10.0` change log can be found on the official [release notes]&#40;https://github.com/eslint/eslint/releases/tag/v7.10.0&#41;.)

[comment]: <> (* `eslint-plugin-import@2.22.1` change log can be found on the official [release notes]&#40;https://github.com/benmosher/eslint-plugin-import/releases/tag/v2.22.1&#41;.)

[comment]: <> (* `eslint-plugin-react@7.21.2` change log can be found on the official [release notes]&#40;https://github.com/yannickcr/eslint-plugin-react/releases/tag/v7.21.2&#41;)

[comment]: <> (* `html-webpack-plugin@4.5.0` change log can be found on the official [release notes]&#40;https://github.com/jantimon/html-webpack-plugin/releases/tag/v4.5.0&#41;.)

[comment]: <> (* `mini-css-extract-plugin@0.11.2` change log can be found on the official [release notes]&#40;https://github.com/webpack-contrib/mini-css-extract-plugin/releases/tag/v0.11.2&#41;)

[comment]: <> (* `sass@1.26.11` change log can be found on the official [release notes]&#40;https://github.com/sass/dart-sass/releases/tag/1.26.11&#41;)

[comment]: <> (* `terser-webpack-plugin@4.2.2` change log can be found on the official [release notes]&#40;https://github.com/webpack-contrib/terser-webpack-plugin/releases/tag/v4.2.2&#41;.)

[comment]: <> (* `webpack@4.44.2` change log can be found on the official [release notes]&#40;https://github.com/webpack/webpack/releases/tag/v4.44.2&#41;.)

[comment]: <> (## [4.4.0]&#40;https://github.com/WeAreAthlon/frontend-webpack-boilerplate/releases/tag/v4.4.0&#41;)

[comment]: <> (### 23/08/2020)

[comment]: <> (### Updated)

[comment]: <> (* `README.md` - simply badges and add badges to show the current supported `node` version and the used `webpack version`. )

[comment]: <> (### Removed)

[comment]: <> (* `VERSION` file - use the `package.json` defined version.)

[comment]: <> (### Packages Major Version Updates)

[comment]: <> (* `css-loader@4.2.1` from `3.x` new features can be found on the official [release notes]&#40;https://github.com/webpack-contrib/css-loader/releases/tag/v4.0.0&#41;.)

[comment]: <> (* `terser-webpack-plugin@4.0.0` from `3.x` new features can be found on the official [release notes]&#40;https://github.com/webpack-contrib/terser-webpack-plugin/releases/tag/v3.0.7&#41;.)

[comment]: <> (### Packages Minor Version Updates)

[comment]: <> (* `@babel/core@7.11.1` change log can be found on the official [release notes]&#40;https://github.com/babel/babel/releases/tag/v7.11.0&#41;)

[comment]: <> (* `@babel/preset-env@7.11.0` change log can be found on the official [release notes]&#40;https://github.com/babel/babel/releases/tag/v7.11.0&#41;)

[comment]: <> (* `autoprefixer@9.8.6` change log can be found on the official [release notes]&#40;https://github.com/postcss/autoprefixer/releases/tag/9.8.6&#41;.)

[comment]: <> (* `browser-sync@2.26.12` change log can be found on the official [release notes]&#40;https://github.com/BrowserSync/browser-sync/releases&#41;.)

[comment]: <> (* `eslint@7.6.0` change log can be found on the official [release notes]&#40;https://github.com/eslint/eslint/releases/tag/v7.6.0&#41;.)

[comment]: <> (* `eslint-plugin-react@7.20.5` change log can be found on the official [release notes]&#40;https://github.com/yannickcr/eslint-plugin-react/releases/tag/v7.20.5&#41;)

[comment]: <> (* `sass-loader@9.0.3` change log can be found on the official [release notes]&#40;https://github.com/webpack-contrib/sass-loader/releases/tag/v9.0.3&#41;.)

[comment]: <> (* `webpack@4.44.1` change log can be found on the official [release notes]&#40;https://github.com/webpack/webpack/releases/tag/v4.44.1&#41;.)

[comment]: <> (## [4.3.1]&#40;https://github.com/WeAreAthlon/frontend-webpack-boilerplate/releases/tag/v4.3.1&#41;)

[comment]: <> (### 23/08/2020)

[comment]: <> (### Updates)

[comment]: <> (* `README` - fixed spelling &#40;thanks to [@TammyTee]&#40;https://github.com/TammyTee&#41;)

[comment]: <> (* `npm` audit fixes across all packages.)

[comment]: <> (### Packages Minor Version Updates)

[comment]: <> (* `terser-webpack-plugin@3.0.7` change log can be found on the official [release notes]&#40;https://github.com/webpack-contrib/terser-webpack-plugin/releases/tag/v3.0.7&#41;.)

[comment]: <> (* `eslint-plugin-react-hooks@4.0.8` change log can be found on the official [release notes]&#40;https://www.npmjs.com/package/eslint-plugin-react-hooks&#41;.)

[comment]: <> (* `@babel/core@7.10.5` change log can be found on the official [release notes]&#40;https://github.com/babel/babel/releases/tag/v7.10.5&#41;.)

[comment]: <> (* `browser-sync@2.26.10` change log can be found on the official [release notes]&#40;https://github.com/BrowserSync/browser-sync/releases&#41;.)

[comment]: <> (* `eslint@7.5.0` change log can be found on the official [release notes]&#40;https://github.com/eslint/eslint/releases/tag/v7.4.0&#41;.)

[comment]: <> (## [4.3.0]&#40;https://github.com/WeAreAthlon/frontend-webpack-boilerplate/releases/tag/v4.3.0&#41;)

[comment]: <> (### 13/08/2020)

[comment]: <> (## Configuration Updates)

[comment]: <> (* The latest version of `copy-webpack-plugin` has new a way of passing configuration patterns)

[comment]: <> (  * the plugin now accepts an object, you should change `new CopyPlugin&#40;patterns, options&#41;` to `new CopyPlugin&#40;{ patterns, options }&#41;`)

[comment]: <> (### Packages Major Version Updates)

[comment]: <> (* `copy-webpack-plugin@6.0.3` from `5.x` new features can be found on the official [release notes]&#40;https://github.com/webpack-contrib/copy-webpack-plugin/releases/tag/v6.0.3&#41;.)

[comment]: <> (* `eslint@7.4.0` from `6.x` new features can be found on the official [release notes]&#40;https://github.com/eslint/eslint/releases/tag/v7.4.0&#41;.)

[comment]: <> (* `eslint-plugin-react-hooks@4.0.7` from `1.x` new features can be found on the official [release notes]&#40;https://www.npmjs.com/package/eslint-plugin-react-hooks&#41;.)

[comment]: <> (* `file-loader@6.0.0` from `5.x` new features can be found on the official [release notes]&#40;https://github.com/webpack-contrib/file-loader/releases/tag/v5.1.0&#41;.)

[comment]: <> (* `html-webpack-plugin@4.3.0` from `3.x` new features can be found on the official [release notes]&#40;https://github.com/jantimon/html-webpack-plugin&#41;.)

[comment]: <> (* `sass-loader@9.0.2` from `8.x` new features can be found on the official [release notes]&#40;https://github.com/webpack-contrib/sass-loader/releases/tag/v8.0.2&#41;.)

[comment]: <> (* `terser-webpack-plugin@3.0.6` from `2.x` new features can be found on the official [release notes]&#40;https://github.com/webpack-contrib/terser-webpack-plugin/releases/tag/v3.0.6&#41;.)

[comment]: <> (* `url-loader@4.1.0` from `3.x` new features can be found on the official [release notes]&#40;https://github.com/webpack-contrib/url-loader/releases/tag/v3.0.0&#41;.)

[comment]: <> (### Packages Minor Version Updates)

[comment]: <> (* `autoprefixer@9.8.5` change log can be found on the official [release notes]&#40;https://github.com/postcss/autoprefixer/releases/tag/9.8.4&#41;.)

[comment]: <> (### Removed Dependencies)

[comment]: <> (* `fibers` - was required by `sass-loader@8.0.0`.)

[comment]: <> (## [4.2.8]&#40;https://github.com/WeAreAthlon/frontend-webpack-boilerplate/releases/tag/v4.2.8&#41;)

[comment]: <> (### 10/08/2020)

[comment]: <> (### Package Updates Full Change Set)

[comment]: <> (* `@babel/core@7.10.4` change log can be found on the official [release notes]&#40;https://github.com/babel/babel/releases/tag/v7.10.4&#41;.)

[comment]: <> (* @babel/preset-env@7.10.4 change log can be found on the official [release notes]&#40;https://github.com/babel/babel/releases/tag/v7.10.4&#41;.)

[comment]: <> (* `ajv@6.12.3` change log can be found on the official [release notes]&#40;https://github.com/epoberezkin/ajv/releases/tag/v6.12.3&#41;.)

[comment]: <> (* `eslint-plugin-import@2.22.0` change log can be found on the official [release notes]&#40;https://github.com/benmosher/eslint-plugin-import/releases/tag/v2.22.0&#41;.)

[comment]: <> (* `eslint-plugin-react@7.20.3` change log can be found on the official [release notes]&#40;https://github.com/yannickcr/eslint-plugin-react/releases/tag/v7.20.3&#41;)

[comment]: <> (* `sass@1.26.10` change log can be found on the official [release notes]&#40;https://github.com/sass/dart-sass/releases/tag/1.26.10&#41;)

[comment]: <> (## [4.2.7]&#40;https://github.com/WeAreAthlon/frontend-webpack-boilerplate/releases/tag/v4.2.7&#41;)

[comment]: <> (### 25/06/2020)

[comment]: <> (### Package Updates Full Change Set)

[comment]: <> (* `@babel/preset-env@7.10.3` change log can be found on the official [release notes]&#40;https://github.com/babel/babel/releases/tag/v7.10.3&#41;)

[comment]: <> (* `@babel/core@7.10.3` change log can be found on the official [release notes]&#40;https://github.com/babel/babel/releases/tag/v7.10.3&#41;)

[comment]: <> (* `autoprefixer@9.8.4` change log can be found on the official [release notes]&#40;https://github.com/postcss/autoprefixer/releases/tag/9.8.4&#41;)

[comment]: <> (* `css-loader@3.6.0` change log can be found on the official [release notes]&#40;https://github.com/webpack-contrib/css-loader/releases/tag/v3.6.0&#41;)

[comment]: <> (* `eslint-config-airbnb@18.2.0` change log can be found on the official [release notes]&#40;https://github.com/airbnb/javascript/releases/tag/eslint-config-airbnb-v18.2.0&#41;. )

[comment]: <> (* `eslint-plugin-jsx-a11y@6.3.1` change log can be found on the official [release notes]&#40;https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/releases/tag/v6.3.1&#41;)

[comment]: <> (* `eslint-plugin-import@2.21.2` change log can be found on the official [release notes]&#40;https://github.com/benmosher/eslint-plugin-import/releases/tag/v2.21.2&#41;.)

[comment]: <> (* `sass@1.26.9` change log can be found on the official [release notes]&#40;https://github.com/sass/dart-sass/releases/tag/1.26.9&#41;.)

[comment]: <> (* `webpack-cli@3.3.12` change log can be found on the official [release notes]&#40;https://github.com/webpack/webpack-cli/releases/tag/v3.3.12&#41;.)

[comment]: <> (## [4.2.6]&#40;https://github.com/WeAreAthlon/frontend-webpack-boilerplate/releases/tag/v4.2.6&#41;)

[comment]: <> (### 03/06/2020)

[comment]: <> (### Package Updates Full Change Set)

[comment]: <> (* `@babel/core@7.10.2` change log can be found on the official [release notes]&#40;https://github.com/babel/babel/releases/tag/v7.10.2&#41;)

[comment]: <> (* `@babel/preset-env@7.10.2` change log can be found on the official [release notes]&#40;https://github.com/babel/babel/releases/tag/v7.10.2&#41;)

[comment]: <> (* `autoprefixer@9.8.0` change log can be found on the official [release notes]&#40;https://github.com/postcss/autoprefixer/releases/tag/9.8.0&#41;)

[comment]: <> (* `eslint-plugin-react@7.20.0` change log can be found on the official [release notes]&#40;https://github.com/yannickcr/eslint-plugin-react/releases/tag/v7.20.0&#41;)

[comment]: <> (* `sass@1.26.7` change log can be found on the official [release notes]&#40;https://github.com/sass/dart-sass/releases/tag/1.26.7&#41;)

[comment]: <> (* `terser-webpack-plugin@2.3.7` change log can be found on the official [release notes]&#40;https://github.com/webpack-contrib/terser-webpack-plugin/releases/tag/v2.3.7&#41;)

[comment]: <> (## [4.2.5]&#40;https://github.com/WeAreAthlon/frontend-webpack-boilerplate/releases/tag/v4.2.5&#41;)

[comment]: <> (### 07/05/2020)

[comment]: <> (### Package Updates Full Change Set)

[comment]: <> (* `@babel/core@7.9.6` change log can be found on the official [release notes]&#40;https://github.com/babel/babel/releases/tag/v7.9.6&#41;.)

[comment]: <> (* `@babel/preset-env@7.9.6` change log can be found on the official [release notes]&#40;https://github.com/babel/babel/releases/tag/v7.9.6&#41;.)

[comment]: <> (* `css-loader@3.5.3` change log can be found on the official [release notes]&#40;https://github.com/webpack-contrib/css-loader/releases/tag/v3.5.3&#41;.)

[comment]: <> (* `style-loader@1.2.1` change log can be found on the official [release notes]&#40;https://github.com/webpack-contrib/style-loader/releases/tag/v1.2.1&#41;.)

[comment]: <> (* `node-sass@4.14.1` change log can be found on the official [release notes]&#40;https://github.com/sass/node-sass/releases/tag/v4.14.1&#41;.)

[comment]: <> (* `fibers@4.0.3` change log can be found on the official [release notes]&#40;https://github.com/laverdet/node-fibers/releases/tag/v4.0.3&#41;.)

[comment]: <> (* `sass@1.26.5` change log can be found on the official [release notes]&#40;https://github.com/sass/dart-sass/releases/tag/1.26.5&#41;.)

[comment]: <> (* `terser-webpack-plugin@2.3.6` change log can be found on the official [release notes]&#40;https://github.com/webpack-contrib/terser-webpack-plugin/releases/tag/v2.3.6&#41;.)

[comment]: <> (* `webpack@4.43.0` change log can be found on the official [release notes]&#40;https://github.com/webpack/webpack/releases/tag/v4.43.0&#41;.)

[comment]: <> (## [4.2.4]&#40;https://github.com/WeAreAthlon/frontend-webpack-boilerplate/releases/tag/v4.2.4&#41;)

[comment]: <> (### 05/04/2020)

[comment]: <> (### Package Updates Full Change Set)

[comment]: <> (* `@babel/preset-env@7.9.5` change log can be found on the official [release notes]&#40;https://github.com/babel/babel/releases/tag/v7.9.5&#41;.)

[comment]: <> (* `autoprefixer@9.7.6` change log can be found on the official [release notes]&#40;https://github.com/postcss/autoprefixer/releases/tag/9.7.6&#41;.)

[comment]: <> (* `ajv@6.12.2` change log can be found on the official [release notes]&#40;https://github.com/epoberezkin/ajv/releases/tag/v6.12.2&#41;.)

[comment]: <> (* `css-loader@3.5.2` change log can be found on the official [release notes]&#40;https://github.com/webpack-contrib/css-loader/releases/tag/v3.5.2&#41;.)

[comment]: <> (* `style-loader@1.1.4` change log can be found on the official [release notes]&#40;https://github.com/webpack-contrib/style-loader/releases/tag/v1.1.4&#41;.)

[comment]: <> (## [4.2.3]&#40;https://github.com/WeAreAthlon/frontend-webpack-boilerplate/releases/tag/v4.2.3&#41;)

[comment]: <> (### 05/04/2020)

[comment]: <> (### Updates)

[comment]: <> (* Sucurity audit fixes.)

[comment]: <> (* README - update link to demo deployment page.)

[comment]: <> (### Package Updates Full Change Set)

[comment]: <> (* `eslint-plugin-import@2.20.2` change log can be found on the official [release notes]&#40;https://github.com/benmosher/eslint-plugin-import/releases/tag/v2.20.2&#41;.)

[comment]: <> (## [4.2.2]&#40;https://github.com/WeAreAthlon/frontend-webpack-boilerplate/releases/tag/v4.2.2&#41;)

[comment]: <> (### 24/03/2020)

[comment]: <> (### Updates)

[comment]: <> (* Fix SASS linter errors on the updated demo page.)

[comment]: <> (## [4.2.1]&#40;https://github.com/WeAreAthlon/frontend-webpack-boilerplate/releases/tag/v4.2.1&#41;)

[comment]: <> (### 24/03/2020)

[comment]: <> (### Updates)

[comment]: <> (* Updated demo page with brief description and link to the _GitHub_ repository.)

[comment]: <> (  * Demo deployment available on [Frontend Webpack Boilerplate]&#40;https://weareathlon.github.io/frontend-webpack-boilerplate/&#41;)

[comment]: <> (* Cleanup webpack config from side comments.)

[comment]: <> (* README file update)

[comment]: <> (  * Updated build badge URL link.)

[comment]: <> (## [4.2.0]&#40;https://github.com/WeAreAthlon/frontend-webpack-boilerplate/releases/tag/v4.2.0&#41;)

[comment]: <> (### 24/03/2020)

[comment]: <> (### Repository File Structure Reorganisation)

[comment]: <> (* Introduced `.github/` directory to group all _GitHub_ community development related templates.)

[comment]: <> (  * New issue templates for _bug_, _feature_, _support_ requests.)

[comment]: <> (* [Travis CI]&#40;https://travis-ci.org/&#41; integration configuration.)

[comment]: <> (  * Deploy to _GitHub_ pages. Demo deployment available on [Frontend Webpack Boilerplate]&#40;https://weareathlon.github.io/frontend-webpack-boilerplate/&#41;)

[comment]: <> (### Package Updates Full Change Set)

[comment]: <> (* `@babel/core@7.9.0` change log can be found on the official [release notes]&#40;https://github.com/babel/babel/releases/tag/v7.9.0&#41;.)

[comment]: <> (* `@babel/preset-env@7.9.0` change log can be found on the official [release notes]&#40;https://github.com/babel/babel/releases/tag/v7.9.0&#41;.)

[comment]: <> (* `autoprefixer@9.7.5` change log can be found on the official [release notes]&#40;https://github.com/postcss/autoprefixer/releases/tag/9.7.5&#41;.)

[comment]: <> (* `babel-loader@8.1.0` change log can be found on the official [release notes]&#40;https://github.com/babel/babel-loader/releases/tag/v8.1.0&#41;.)

[comment]: <> (* `webpack@4.42.1` change log can be found on the official [release notes]&#40;https://github.com/webpack/webpack/releases/tag/v4.42.1&#41;.)

[comment]: <> (## [4.1.5]&#40;https://github.com/WeAreAthlon/frontend-webpack-boilerplate/releases/tag/v4.1.5&#41;)

[comment]: <> (### 15/03/2020)

[comment]: <> (### Package Updates Full Change Set)

[comment]: <> (* `@babel/core@7.8.7` change log can be found on the official [release notes]&#40;https://github.com/babel/babel/releases/tag/v7.8.7&#41;.)

[comment]: <> (* `@babel/preset-env@7.8.7` change log can be found on the official [release notes]&#40;https://github.com/babel/babel/releases/tag/v7.8.7&#41;.)

[comment]: <> (* `cross-env@7.0.2` change log can be found on the official [release notes]&#40;https://github.com/kentcdodds/cross-env/releases/tag/v7.0.2&#41;. )

[comment]: <> (* `eslint-config-airbnb@18.1.0` change log can be found on the official [release notes]&#40;https://github.com/airbnb/javascript/releases/tag/eslint-config-airbnb-v18.1.0&#41;. )

[comment]: <> (* `eslint-plugin-react@7.19.0` change log can be found on the official [release notes]&#40;https://github.com/yannickcr/eslint-plugin-react/releases/tag/v7.19.0&#41;.)

[comment]: <> (* `sass@1.26.3` change log can be found on the official [release notes]&#40;https://github.com/sass/dart-sass/releases/tag/1.26.3&#41;.)

[comment]: <> (* `webpack@4.42.0` change log can be found on the official [release notes]&#40;https://github.com/webpack/webpack/releases/tag/v4.42.0&#41;.)

[comment]: <> (## [4.1.4]&#40;https://github.com/WeAreAthlon/frontend-webpack-boilerplate/releases/tag/v4.1.4&#41;)

[comment]: <> (### 26/02/2020)

[comment]: <> (### Package Updates Full Change Set)

[comment]: <> (* `ajv@6.12.0` change log can be found on the official [release notes]&#40;https://github.com/epoberezkin/ajv/releases/tag/v6.12.0&#41;.)

[comment]: <> (* `file-loader@5.1.0` change log can be found on the official [release notes]&#40;https://github.com/webpack-contrib/file-loader/releases/tag/v5.1.0&#41;.)

[comment]: <> (* `sass@1.26.1` change log can be found on the official [release notes]&#40;https://github.com/sass/dart-sass/releases/tag/1.26.1&#41;.)

[comment]: <> (## [4.1.3]&#40;https://github.com/WeAreAthlon/frontend-webpack-boilerplate/releases/tag/v4.1.3&#41;)

[comment]: <> (### 19/02/2020)

[comment]: <> (### Package Updates Full Change Set)

[comment]: <> (* `eslint-plugin-import@2.20.1` change log can be found on the official [release notes]&#40;https://github.com/benmosher/eslint-plugin-import/releases/tag/v2.20.1&#41;.)

[comment]: <> (* `eslint-plugin-react@7.18.3` change log can be found on the official [release notes]&#40;https://github.com/yannickcr/eslint-plugin-react/releases/tag/v7.18.3&#41;.)

[comment]: <> (* `@babel/core@7.8.4` change log can be found on the official [release notes]&#40;https://github.com/babel/babel/releases/tag/v7.8.4&#41;.)

[comment]: <> (* `@babel/preset-env@7.8.4` change log can be found on the official [release notes]&#40;https://github.com/babel/babel/releases/tag/v7.8.4&#41;.)

[comment]: <> (* `terser-webpack-plugin@2.3.5` change log can be found on the official [release notes]&#40;https://github.com/webpack-contrib/terser-webpack-plugin/releases/tag/v2.3.5&#41;.)

[comment]: <> (* `webpack-cli@3.3.11` change log can be found on the official [release notes]&#40;https://github.com/webpack/webpack-cli/releases/tag/v3.3.11&#41;.)

[comment]: <> (* `webpack@4.41.6` change log can be found on the official [release notes]&#40;https://github.com/webpack/webpack/releases/tag/v4.41.6&#41;.)

[comment]: <> (## [4.1.2]&#40;https://github.com/WeAreAthlon/frontend-webpack-boilerplate/releases/tag/v4.1.2&#41;)

[comment]: <> (### 22/01/2020)

[comment]: <> (### Updated )

[comment]: <> (* `README.md`)

[comment]: <> (  * Text formatting)

[comment]: <> (### Package Updates Full Change Set)

[comment]: <> (* `cross-env@7.0.0` new features can be found on the official [release notes]&#40;https://github.com/kentcdodds/cross-env/releases/tag/v7.0.0&#41;.)

[comment]: <> (## [4.1.1]&#40;https://github.com/WeAreAthlon/frontend-webpack-boilerplate/releases/tag/v4.1.1&#41;)

[comment]: <> (### 22/01/2020)

[comment]: <> (### Updated )

[comment]: <> (* `README.md`)

[comment]: <> (  * Badges for `npmjs.org` downloads, open issues, license)

[comment]: <> (  * Cover repository photo.)

[comment]: <> (### Package Updates Full Change Set)

[comment]: <> (* `ajv@6.11.0` new features can be found on the official [release notes]&#40;https://github.com/epoberezkin/ajv/releases/tag/v6.11.0&#41;.)

[comment]: <> (* `autoprefixer@9.7.4` bugfixes can be found on the official [release notes]&#40;https://github.com/postcss/autoprefixer/releases/tag/9.7.4&#41;.)

[comment]: <> (* `@babel/core@7.8.3` new features can be found on the official [release notes]&#40;https://github.com/babel/babel/releases/tag/v7.8.3&#41;.)

[comment]: <> (* `@babel/preset-env@7.8.3` new features can be found on the official [release notes]&#40;https://github.com/babel/babel/releases/tag/v7.8.3&#41;.)

[comment]: <> (* `css-loader@3.4.2` bugfixes can be found on the official [release notes]&#40;https://github.com/webpack-contrib/css-loader/releases/tag/v3.4.2&#41;.)

[comment]: <> (* `eslint-plugin-import@2.20.0` new features can be found on the official [release notes]&#40;https://github.com/benmosher/eslint-plugin-import/releases/tag/v2.20.0&#41;.)

[comment]: <> (* `eslint-plugin-react@7.18.0` new features can be found on the official [release notes]&#40;https://github.com/yannickcr/eslint-plugin-react/releases/tag/v7.18.0&#41;.)

[comment]: <> (* `node-sass@4.13.1` bugfixes can be found on the official [release notes]&#40;https://github.com/sass/node-sass/releases/tag/v4.13.1&#41;.)

[comment]: <> (* `sass@1.25.0` new features can be found on the official [release notes]&#40;https://github.com/sass/dart-sass/releases/tag/1.25.0&#41;.)

[comment]: <> (* `sass-loader@8.0.2` bugfixes can be found on the official [release notes]&#40;https://github.com/webpack-contrib/sass-loader/releases/tag/v8.0.2&#41;.)

[comment]: <> (* `style-loader@1.1.3` bugfixes can be found on the official [release notes]&#40;https://github.com/webpack-contrib/style-loader/releases/tag/v1.1.3&#41;.)

[comment]: <> (* `terser-webpack-plugin@2.3.2` new features can be found on the official [release notes]&#40;https://github.com/webpack-contrib/terser-webpack-plugin/releases/tag/v2.3.2&#41;.)

[comment]: <> (## [4.1.0]&#40;https://github.com/WeAreAthlon/frontend-webpack-boilerplate/releases/tag/v4.1.0&#41;)

[comment]: <> (### 03/01/2020)

[comment]: <> (### Updates)

[comment]: <> (* **Important** Updated `webpack` configuration to enable serving the webpack build files using the built-in serving functionality of the `browser-sync` package.)

[comment]: <> (  * Ability to configure the usage of a demo built-in server or using an existing server via the proxy feature of `browser sync`)

[comment]: <> (  * Definition of `serverConfiguration` object.)

[comment]: <> (  * Configuration of `watchOptions` to support.)

[comment]: <> (    * If watching does not work for you, try out this option. Watching does might work with *NFS* and machines in *VirtualBox*.)

[comment]: <> (* New package npm command `npm run watch:externalServer` to monitor file changes when using an existing web application server, refer to the *README* for more details.)

[comment]: <> (* New package npm command `npm run bundle:externalServer` to install and monitor file changes when using an existing web application server, refer to the *README* for more details.)

[comment]: <> (* Package dependencies updates.)

[comment]: <> (* _README_ file to note all configuration changes.)

[comment]: <> (### Package Minor Updates)

[comment]: <> (* `sass@1.24.1` change log can be found on the official [release notes]&#40;https://github.com/sass/dart-sass/releases/tag/1.24.1&#41;)

[comment]: <> (* `webpack@4.41.5` change log can be found on the official [release notes]&#40;https://github.com/webpack/webpack/releases/tag/v4.41.5&#41;)

[comment]: <> (## [4.0.1]&#40;https://github.com/WeAreAthlon/frontend-webpack-boilerplate/releases/tag/v4.0.1&#41;)

[comment]: <> (### 27/12/2019)

[comment]: <> (### Updates)

[comment]: <> (* Package dependencies)

[comment]: <> (* _README_ file to note the minimal `node` version.)

[comment]: <> (### Package Minor Updates)

[comment]: <> (* `style-loader@1.1.2` change log can be found on the official [release notes]&#40;https://github.com/webpack-contrib/style-loader/releases/tag/v1.1.2&#41;)

[comment]: <> (## [4.0.0]&#40;https://github.com/WeAreAthlon/frontend-webpack-boilerplate/releases/tag/v4.0.0&#41;)

[comment]: <> (### 21/12/2019)

[comment]: <> (### Breaking Changes)

[comment]: <> (#### Updated minimum Node version)

[comment]: <> (* Minimum required nodejs version is `10.13.0`)

[comment]: <> (* Rebuild our `node-sass` by running)

[comment]: <> (```shell script)

[comment]: <> ($ npm rebuild node-sass)

[comment]: <> (```)

[comment]: <> (#### File Loader, URL Loader updates)

[comment]: <> (* Rename the `esModules` option to `esModule`)

[comment]: <> (* Switch to ES modules by default &#40;the option `esModule` is `true` by default&#41;)

[comment]: <> (#### SASS Loader updates)

[comment]: <> (* Move all sass &#40;`includePaths`, `importer`, `functions`&#41; options to the `sassOptions` option. The `functions` option can't be used as `Function`, you should use `sassOption` as `Function` to achieve this.)

[comment]: <> (* The `data` option was renamed to the `prependData` option)

[comment]: <> (* Default value of the `sourceMap` option depends on the `devtool` value &#40;`eval`/`false` values don't enable source map generation&#41;)

[comment]: <> (#### Style Loader updates)

[comment]: <> (* The `convertToAbsoluteUrls` option was removed, you don't need this anymore)

[comment]: <> (* The `attrs` option was renamed to the `attributes` option)

[comment]: <> (* The `transform` option was removed without replacement)

[comment]: <> (* The `hmr` option was removed, `webpack` automatically inject HMR code when it is required &#40;when the `HotModuleReplacementPlugin` plugin was used&#41;)

[comment]: <> (* The `sourceMap` option was removed. The loader automatically inject source maps if the previous loader emit them)

[comment]: <> (* The `ref`/`unref` api methods were removed for `useable` loader, please use the `use`/`unuse` api methods)

[comment]: <> (* The `style-loader/url` loader was removed in favor `injectType` option &#40;look the documentation about the `injectType` option&#41;)

[comment]: <> (* The `style-loader/useable` loader was removed in favor `injectType` option &#40;look the documentation about the `injectType` option&#41;)

[comment]: <> (* The `singleton` option was removed &#40;look documentation about the `injectType` option&#41;)

[comment]: <> (* The `insertAt` option was removed in favor the `insert` option &#40;look the documentation about the `insert` option and examples&#41;)

[comment]: <> (* The `insertInto` options was removed in favor the `insert` option &#40;look the documentation about the `insert` option and examples&#41;)

[comment]: <> (### New dependencies)

[comment]: <> (* [`eslint-plugin-react-hooks`]&#40;https://www.npmjs.com/package/eslint-plugin-react-hooks&#41; required by `eslint-config-airbnb@18.0.1`)

[comment]: <> (* [`sass`]&#40;https://www.npmjs.com/package/sass&#41; required by `sass-loader@8.0.0`)

[comment]: <> (* [`fibers`]&#40;https://www.npmjs.com/package/fibers&#41; required by `sass-loader@8.0.0`)

[comment]: <> (### Packages major versions update)

[comment]: <> (* `eslint` from `5.x` to `6.8.0` change log can be found on the official [release notes]&#40;https://github.com/eslint/eslint/releases/tag/v6.8.0&#41;)

[comment]: <> (* `eslint-config-airbnb` from `17.x` to `18` change log can be found on the official [release notes]&#40;https://github.com/airbnb/javascript/releases/tag/eslint-config-airbnb-v18.0.1&#41;)

[comment]: <> (* `file-loader` from `4.x` to `5.x` change log can be found on the official [release notes]&#40;https://github.com/webpack-contrib/file-loader/releases/tag/v5.0.2&#41;)

[comment]: <> (* `sass-loader` from `7.x` to `8.x` change log can be found on the official [release notes]&#40;https://github.com/webpack-contrib/sass-loader/releases/tag/v8.0.0&#41;)

[comment]: <> (* `style-loader` from `0.x` to `1.x` change log can be found on the official [release notes]&#40;https://github.com/webpack-contrib/style-loader/releases/tag/v1.1.1&#41;)

[comment]: <> (* `terser-webpack-plugin` from `1.x` to `2.x` change log can be found on the official [release notes]&#40;https://github.com/webpack-contrib/terser-webpack-plugin/releases/tag/v2.3.1&#41;)

[comment]: <> (* `url-loader` from `2.x` to `3.x` change log can be found on the official [release notes]&#40;https://github.com/webpack-contrib/url-loader/releases/tag/v3.0.0&#41;)

[comment]: <> (### Packages minor versions update)

[comment]: <> (* `mini-css@0.9.0` change log can be found on the official [release notes]&#40;https://github.com/webpack-contrib/mini-css-extract-plugin/releases/tag/v0.9.0&#41;)

[comment]: <> (* `browserslist@4.8.2` change log can be found on the official [release notes]&#40;https://github.com/browserslist/browserslist/releases/tag/4.8.2&#41;)

[comment]: <> (* `caniuse-lite@1.0.30001016` change log can be found on the official [release notes]&#40;https://github.com/ben-eb/caniuse-lite/releases&#41;)

[comment]: <> (## [3.3.0]&#40;https://github.com/WeAreAthlon/frontend-webpack-boilerplate/releases/tag/v3.3.0&#41;)

[comment]: <> (### 20/12/2019)

[comment]: <> (### Package Updates Full Change Set)

[comment]: <> (* `autoprefixer@9.7.3` new features can be found on the official [release notes]&#40;https://github.com/postcss/autoprefixer/releases/tag/9.7.3&#41;.)

[comment]: <> (* `sass-loader@8.0.0` new features can be found on the official [release notes]&#40;https://github.com/webpack-contrib/sass-loader/releases/tag/v8.0.0&#41;.)

[comment]: <> (* `copy-webpack-plugin@5.1.5` new features can be found on the official [release notes]&#40;https://github.com/webpack-contrib/copy-webpack-plugin/releases/tag/v5.1.5&#41;.)

[comment]: <> (* `css-loader@3.4.0` new features can be found on the official [release notes]&#40;https://github.com/webpack-contrib/css-loader/releases/tag/v3.4.0&#41;.)

[comment]: <> (* `file-loader@4.3.0` new features can be found on the official [release notes]&#40;https://github.com/webpack-contrib/file-loader/releases/tag/v4.3.0&#41;.)

[comment]: <> (* `node-sass@4.13.0` new features can be found on the official [release notes]&#40;https://github.com/sass/node-sass/releases/tag/v4.13.0&#41;.)

[comment]: <> (* `cross-env@5.2.1` new features can be found on the official [release notes]&#40;https://github.com/kentcdodds/cross-env/releases/tag/v6.0.3&#41;.)

[comment]: <> (* `eslint-plugin-react@7.17.0` new features can be found on the official [release notes]&#40;https://github.com/yannickcr/eslint-plugin-react/releases/tag/v7.17.0&#41;.)

[comment]: <> (* `eslint-plugin-import@2.19.1` new features can be found on the official [release notes]&#40;https://github.com/benmosher/eslint-plugin-import/releases/tag/v2.19.1&#41;.)

[comment]: <> (* `url-loader@2.3.0` new features can be found on the official [release notes]&#40;https://github.com/webpack-contrib/url-loader/releases/tag/v2.3.0&#41;.)

[comment]: <> (* `terser-webpack-plugin@1.4.3` new features can be found on the official [release notes]&#40;https://github.com/webpack-contrib/terser-webpack-plugin/releases/tag/v1.4.3&#41;.)

[comment]: <> (* `webpack@4.41.4` new features can be found on the official [release notes]&#40;https://github.com/webpack/webpack/releases/tag/v4.41.4&#41;.)

[comment]: <> (* `webpack-cli@3.3.10` new features can be found on the official [release notes]&#40;https://github.com/webpack/webpack-cli/releases/tag/v3.3.10&#41;.)

[comment]: <> (* `@babel/preset-env@7.7.7` new features can be found on the official [release notes]&#40;https://github.com/babel/babel/releases/tag/v7.7.7&#41;.)

[comment]: <> (* `@babel/core@7.7.7` new features can be found on the official [release notes]&#40;https://github.com/babel/babel/releases/tag/v7.7.7&#41;.)

[comment]: <> (## [3.2.0]&#40;https://github.com/WeAreAthlon/frontend-webpack-boilerplate/releases/tag/v3.1.0&#41;)

[comment]: <> (### 26/07/2019)

[comment]: <> (### Package Updates)

[comment]: <> (* `@babel/core@7.5.5` new features can be found on the official [release notes]&#40;https://github.com/babel/babel/releases/tag/v7.5.5&#41;.)

[comment]: <> (* `@babel/preset-env@7.5.5` new features can be found on the official [release notes]&#40;https://github.com/babel/babel/releases/tag/v7.5.5&#41;.)

[comment]: <> (* `webpack@4.38.0` new features can be found on the official [release notes]&#40;https://github.com/webpack/webpack/releases/tag/v4.38.0&#41;.)

[comment]: <> (* `css-loader@3.1.0` new features can be found on the official [release notes]&#40;https://github.com/webpack-contrib/css-loader/releases/tag/v3.1.0&#41;.)

[comment]: <> (* `eslint-plugin-import@2.18.2` new features  can be found on the official [release notes]&#40;https://github.com/benmosher/eslint-plugin-import/releases/tag/v2.18.2&#41;.)

[comment]: <> (* `eslint-plugin-react@7.14.3` new features can be found on the official [release notes]&#40;https://github.com/yannickcr/eslint-plugin-react/releases/tag/v7.14.3&#41;.)

[comment]: <> (* `file-loader@4.1.0` new features can be found on the official [release notes]&#40;https://github.com/webpack-contrib/file-loader/releases/tag/v4.1.0&#41;.)

[comment]: <> (* `url-loader@2.1.0` new features can be found on the official [release notes]&#40;https://github.com/webpack-contrib/url-loader/releases/tag/v2.1.0&#41;.)

[comment]: <> (### Minor Package Updates)

[comment]: <> (* `autoprefixer@9.6.1`)

[comment]: <> (* `ajv@6.10.2`)

[comment]: <> (* `eslint-config-airbnb@17.1.1`)

[comment]: <> (* `eslint-plugin-react@7.14.3`)

[comment]: <> (* `eslint-plugin-jsx-a11y@6.2.3`)

[comment]: <> (* `optimize-css-assets-webpack-plugin@5.0.3`)

[comment]: <> (* `webpack-cli@3.3.6`)

[comment]: <> (## [3.1.0]&#40;https://github.com/WeAreAthlon/frontend-webpack-boilerplate/releases/tag/v3.1.0&#41;)

[comment]: <> (### 19/06/2019)

[comment]: <> (### Package Updates)

[comment]: <> (* `css-loader` updated to `3.0.0` here are the [release notes]&#40;https://github.com/webpack-contrib/css-loader/releases/tag/v3.0.0&#41;. )

[comment]: <> (* `url-loader` updated to `2.0.0` here are the [release notes]&#40;https://github.com/webpack-contrib/url-loader/releases/tag/v2.0.0&#41;.)

[comment]: <> (### Minor Package Updates)

[comment]: <> (* `browser-sync` to `2.26.7`)

[comment]: <> (* `webpack` to `4.34.0`)

[comment]: <> (* `webpack-cli` to `3.3.4`)

[comment]: <> (## [3.0.0]&#40;https://github.com/WeAreAthlon/frontend-webpack-boilerplate/releases/tag/v3.0.0&#41;)

[comment]: <> (#### 15/05/2019)

[comment]: <> (### Breaking Changes)

[comment]: <> (* **Removed `node` 6 support**, `node` must be `>=8.9.0`)

[comment]: <> (* `clean-webpack-plugin` to `v3.0.0` see changes here [Clean Wepback Plugin v3.0.0]&#40;https://github.com/johnagan/clean-webpack-plugin/releases/tag/v3.0.0&#41;)

[comment]: <> (  * Updated configuration in [`webpack.config.js`]&#40;./webpack.config.js&#41;)

[comment]: <> (* `file-loader` to `4.0.0` see changes here [Webpack file loader v4.0.0]&#40;https://github.com/webpack-contrib/file-loader/releases/tag/v4.0.0&#41;)
  
[comment]: <> (### Minor Package Updates)

[comment]: <> (* `autoprefixer` to `9.6.0`)

[comment]: <> (* `@babel/core` to `7.4.5`)

[comment]: <> (* `@babel/preset-env` to `7.4.5`)

[comment]: <> (* `eslint-plugin-import` to `2.17.3`)

[comment]: <> (* `mini-css-extract-plugin` to `0.7.0`)

[comment]: <> (* `terser-webpack-plugin` to `1.3.0`)

[comment]: <> (* `webpack` to `4.33.0`)
  
[comment]: <> (### Security audit fixes)

[comment]: <> (* `axios` &#40;*dependency of browser-sync [dev]*&#41; updated to `0.18.11` [more info]&#40;https://npmjs.com/advisories/880&#41;)

[comment]: <> (* `npm audit` output:)

[comment]: <> (>  === npm audit security report ===                        )

[comment]: <> (>                                                                                  )

[comment]: <> (>  found 0 vulnerabilities)

[comment]: <> (>   in 17859 scanned packages)

[comment]: <> (## [2.6.1]&#40;https://github.com/WeAreAthlon/frontend-webpack-boilerplate/releases/tag/v2.6.1&#41;)

[comment]: <> (#### 15/05/2019)

[comment]: <> (### Updated)

[comment]: <> (* Security audit fixes)

[comment]: <> (  * `fstream` updated to `1.0.12` [more info]&#40;https://npmjs.com/advisories/886&#41;)

[comment]: <> (  * `tar` updated to `2.2.2` [more info]&#40;https://nvd.nist.gov/vuln/detail/CVE-2018-20834&#41;)

[comment]: <> (## [2.6.0]&#40;https://github.com/WeAreAthlon/frontend-webpack-boilerplate/releases/tag/v2.6.0&#41;)

[comment]: <> (#### 15/05/2019)

[comment]: <> (### Updated)

[comment]: <> (* `wepback` configuration - use `path.resolve` in all file system references.)

[comment]: <> (* Package dependencies)

[comment]: <> (  * Downgraded `clean-webpack-plugin` from `2.0.1` to `1.0.1` &#40;breaking changes, see the updated `webpack.config.js`&#41; due to strange behaviour during `watch` mode.)

[comment]: <> (* Package dependencies trees)

[comment]: <> (* README - _added additional note for NFS and containerized development environments_)

[comment]: <> (## [2.5.0]&#40;https://github.com/WeAreAthlon/frontend-webpack-boilerplate/releases/tag/v2.5.0&#41;)

[comment]: <> (#### 22/04/2019)

[comment]: <> (### Updated)

[comment]: <> (* Switched to using `npm ci` instead of `npm install` for initial install.)

[comment]: <> (  * Updated README)

[comment]: <> (  * More on the clean install npm command can be read here [`npm ci`]&#40;https://docs.npmjs.com/cli/ci.html&#41;)

[comment]: <> (* NPM audit review and dependency packages updates due to reverting them accidentally)

[comment]: <> (  * Updated `tar` to `4.4.2` dependency path `node-sass > node-gyp > tar` - [more info]&#40;https://npmjs.com/advisories/803&#41;)

[comment]: <> (  * Updated `braces` to `2.3.2` dependency path `browser-sync > micromatch > braces` - [more info]&#40;https://npmjs.com/advisories/786&#41;)

[comment]: <> (## [2.4.3]&#40;https://github.com/WeAreAthlon/frontend-webpack-boilerplate/releases/tag/v2.4.3&#41;)

[comment]: <> (#### 22/04/2019)

[comment]: <> (### Updated)

[comment]: <> (* NPM audit review and dependency packages updates)

[comment]: <> (  * Updated `tar` to `4.4.2` dependency path `node-sass > node-gyp > tar` - [more info]&#40;https://npmjs.com/advisories/803&#41;)

[comment]: <> (  * Updated `braces` to `2.3.2` dependency path `browser-sync > micromatch > braces` - [more info]&#40;https://npmjs.com/advisories/786&#41;)

[comment]: <> (## [2.4.2]&#40;https://github.com/WeAreAthlon/frontend-webpack-boilerplate/releases/tag/v2.4.2&#41;)

[comment]: <> (#### 17/04/2019)

[comment]: <> (### Added)

[comment]: <> (* Issue Template)

[comment]: <> (* Pull Request Template)

[comment]: <> (### Updated)

[comment]: <> (* Package dependencies)

[comment]: <> (  * `clean-webpack-plugin` from `1.0.1` to `2.0.1` &#40;breaking changes, see the updated `webpack.config.js`&#41;)

[comment]: <> (  * `copy-webpack-plugin` from `4.6.0` to `5.0.2`)

[comment]: <> (  * `mini-css-extract-plugin` from `0.5.0` to `0.6.0`)

[comment]: <> (* Package dependencies trees)

[comment]: <> (* README)

[comment]: <> (## [2.4.1]&#40;https://github.com/WeAreAthlon/frontend-webpack-boilerplate/releases/tag/v2.4.1&#41;)

[comment]: <> (#### 14/04/2019)

[comment]: <> (### Updated)

[comment]: <> (* NPM audit review and dependency packages updates)

[comment]: <> (  * Auto fixing with `npm audit fix`)

[comment]: <> (  * Manually updated)

[comment]: <> (    * updated `tar` to `4.4.2` dependency path `node-sass > node-gyp > tar` - [more info]&#40;https://npmjs.com/advisories/803&#41;)

[comment]: <> (    * updated `braces` to `2.3.2` dependency path `browser-sync > micromatch > braces` - [more info]&#40;https://npmjs.com/advisories/786&#41;)

[comment]: <> (* _README_ file updated)

[comment]: <> (  * Added instructions hot to update/migrate to newer version of this setup.)

[comment]: <> (## [2.4.0]&#40;https://github.com/WeAreAthlon/frontend-webpack-boilerplate/releases/tag/v2.4.0&#41;)

[comment]: <> (#### 08/01/2019)

[comment]: <> (### Added)

[comment]: <> (* [`copy-webpack-plugin`]&#40;https://github.com/webpack-contrib/copy-webpack-plugin&#41; to copy images that are part of the content &#40;_referenced by `<img>` tags_&#41;)

[comment]: <> (* [`terser-webpack-plugin`]&#40;https://github.com/webpack-contrib/terser-webpack-plugin&#41; to optimize JavaScript files for production)

[comment]: <> (  * This plugin is dependency of `webpack` itself)

[comment]: <> (* Support for favicon in the produced HTML)

[comment]: <> (### Updated)

[comment]: <> (* README)

[comment]: <> (* Dependencies)

[comment]: <> (### Removed)

[comment]: <> (* `uglifyjs-webpack-plugin` - in favor of the webpack included `terser-webpack-plugin`)

[comment]: <> (## [2.3.0]&#40;https://github.com/WeAreAthlon/frontend-webpack-boilerplate/releases/tag/v2.3.0&#41;)

[comment]: <> (#### 03/01/2019)

[comment]: <> (### Added)

[comment]: <> (* NPM package `bundle` script which runs `install` and `watch` tasks in a single call.)

[comment]: <> (### Updated)

[comment]: <> (* README file)

[comment]: <> (* Packages)

[comment]: <> (  * `eslint-plugin-react@7.12.2`)

[comment]: <> (  * `webpack-cli@3.2.0`)
 
[comment]: <> (## [2.2.0]&#40;https://github.com/WeAreAthlon/frontend-webpack-boilerplate/releases/tag/v2.2.0&#41;)

[comment]: <> (#### 02/01/2019)

[comment]: <> (### Added)

[comment]: <> (* _Minify_ and _Uglify_ js `webpack` plugin - [uglifyjs-webpack-plugin]&#40;https://www.npmjs.com/package/uglifyjs-webpack-plugin&#41; due to not consistent behavuour of the built-in webpack)

[comment]: <> (js minimization features)

[comment]: <> (### Updated)

[comment]: <> (* `autoprefixer` package)

[comment]: <> (### Removed)

[comment]: <> (* `uglify-es` package)


[comment]: <> (## [2.1.0]&#40;https://github.com/WeAreAthlon/frontend-webpack-boilerplate/releases/tag/v2.1.0&#41;)

[comment]: <> (#### 31/12/2018)

[comment]: <> (### Added)

[comment]: <> (* [MIT]&#40;https://github.com/WeAreAthlon/frontend-webpack-boilerplate/blob/master/LICENSE&#41; License)

[comment]: <> (### Updated)

[comment]: <> (* [README]&#40;https://github.com/WeAreAthlon/frontend-webpack-boilerplate/blob/master/README.md&#41; - more detailed setup and usage instructions )

[comment]: <> (* Webpack `4.28.3`)

[comment]: <> (* NPM Audit fixed packages, after running `npm audit fix`)

[comment]: <> (> fixed 35 of 35 vulnerabilities in 9452 scanned packages)

[comment]: <> (## [2.0.0]&#40;https://github.com/WeAreAthlon/frontend-webpack-boilerplate/releases/tag/v2.0.0&#41;)

[comment]: <> (#### 14/12/2018)

[comment]: <> (### Added)

[comment]: <> (* Support for HTML template loading)

[comment]: <> (  * Default template included that illustrates custom font and image loaders)

[comment]: <> (### Updated)

[comment]: <> (* Support for `Webpack 4`)

[comment]: <> (* Support for `Babel 7`)

[comment]: <> (  * Added `.babelrc` file for preset definitions)

[comment]: <> (* Cleanup of dist directory upon build)

[comment]: <> (### Removed)

[comment]: <> (* `jQuery` - it can be added per project basis if needed;)

[comment]: <> (## [1.2.0]&#40;https://github.com/WeAreAthlon/frontend-webpack-boilerplate/releases/tag/v1.2.0&#41;)

[comment]: <> (#### 14/12/2018)

[comment]: <> (### Updated)

[comment]: <> (* Package dependencies)

[comment]: <> (* _README_ file with information how to run js/css code linters)

[comment]: <> (* Code style changes)

[comment]: <> (* Package dependencies divided to dev and non-dev packages)

[comment]: <> (* Default package name)

[comment]: <> (## [1.1.0]&#40;https://github.com/WeAreAthlon/frontend-webpack-boilerplate/releases/tag/v1.1.0&#41;)

[comment]: <> (#### 10/07/2017)

[comment]: <> (### Added)

[comment]: <> (* Support for jQuery)

[comment]: <> (## [1.0.0]&#40;https://github.com/WeAreAthlon/frontend-webpack-boilerplate/releases/tag/v1.0.0&#41;)

[comment]: <> (#### 03/07/2017)

[comment]: <> (* Initial Release)
