module.exports = {
  context: __dirname,
  angularProject: 'ng-universal',
  hmr: true,
  metafiles: [
    'angular.json',
    'package.json',
    'src/tsconfig.app.json',
    'src/tsconfig.browser.json',
    'src/tsconfig.server.json',
    'src/index.html',
    'src/main.server.ts',
    'tsconfg.json'
  ],

  bootstrap(proc, configPath) {
    this.logger.info('[udk] > bootstrap container');
  },
  onCompilerWatchClose() {
    this.logger.info('[udk] >>> compiler watch close');
  },
  onCompilerDone(stats) {
    this.logger.info('[udk] >>> compiler done');
  },
  onCompilerFailed(err) {
    this.logger.error('[udk] >>> compiler failed');
  },
  onCompilerWatching(err, stats) {
    this.logger.info('[udk] >>> compiler watching...');
  },
  onDown(event, ...args) {
    this.logger.info('[udk] >> container down', { event, args });
  },
  onUncaughtException(err) {
    this.logger.error('[udk] uncaught exception', err);
  },
  onUnhandledRejection(reason, promise) {
    this.logger.error('[udk] unhandled rejection', {reason, promise});
  },
  onUp(proc) {
    this.logger.info('[udk] >> container up');
  },
  prepareCompiler(compiler) {
    this.logger.info('[udk] >>> prepare webpack compiler');

    compiler.compilers.forEach((c) => {
      c.hooks.invalid.tap('LogPlugin',(file) => {
        this.logger.info('[udk] >>> compiler invalid', c.name, file);
      });
    })
  },
  prepareWebpackConfig() {
    this.logger.info('[udk] >>> prepare webpack config');
  }
};

