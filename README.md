# Demo: Localization

Demo project to show a potential use of Resource Sentry for the localization.

## Getting Started

Install dependencies:

```shell
yarn add --dev @resource-sentry/core
yarn add --dev @resource-sentry/reader-localization
yarn add --dev @resource-sentry/writer-es2015
```

The provided example is for readability, you can combine package names and use a single shell command.

Configuration `rs.config.js` file:

```js
const ReaderLocalization = require('@resource-sentry/reader-localization'),
      WriterEs2015       = require('@resource-sentry/writer-es2015');

module.exports = {
    config: {
        input : [
            new ReaderLocalization({
                entry: './data/locale'
            })
        ],
        output: new WriterEs2015({
            path: './src/model'
        })
    }
};
```

Use of Resource Sentry with locales:

```js
import Rs from './src/model/rs.js';

Rs.getText(Rs.Text.TEXT_INTRO, navigator.language); // Welcome to the Universe
Rs.getText(Rs.Text.TEXT_INTRO, 'es'); // Bienvenido al universo
Rs.getText(Rs.Text.TEXT_INTRO, 'de'); // Willkommen im Universum
```
