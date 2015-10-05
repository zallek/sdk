import makeConfig from './webpack/makeConfig';


export default function karmaConf(config) {

  config.set({
    // autoWatch, it works enabled or not. Probably defined by singleRun.
    basePath: '',
    browsers: ['PhantomJS'],
    exclude: ['./node_modules'],
    files: [
      'src/test/index.js'
    ],
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'chai'],
    logLevel: process.env.CONTINUOUS_INTEGRATION ? config.LOG_WARN
            : config.LOG_INFO,
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      // preprocess with webpack and our sourcemap loader
      'src/test/index.js': ['webpack', 'sourcemap']
    },
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: process.env.CONTINUOUS_INTEGRATION ? []
             : ['progress', 'notify'],
    webpack: makeConfig(true),
    webpackServer: {
      noInfo: true
    }
  });

};
