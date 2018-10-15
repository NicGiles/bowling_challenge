module.exports = function(config) {
  config.set({
    frameworks: ['jasmine-jquery', 'jasmine'],

    files: [
      'spec/**/*.js',
      'src/**/*.js'
    ],

    reporters: ['progress'],
    browsers: ['ChromeHeadless']

  })
}
