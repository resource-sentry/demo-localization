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
