module.exports = {
  context: __dirname,
  angularProject: 'angular',
  hmr: true,
  metafiles: [
    __filename,
    'angular.json',
    'package.json',
    'src/tsconfig.app.json',
    'src/tsconfig.browser.json',
    'src/tsconfig.server.json',
    'src/index.html',
    'src/main.server.ts',
    'tsconfg.json'
  ],
  logger: console,

  bootstrap(container) {
    this.logger.info(`> bootstrap container (pid: ${container.proc.pid})`);
  },
  onUp(container) {
    this.logger.info(`>> container up (pid: ${container.proc.pid})`);
  },
  onDown(container) {
    this.logger.info('>> container down', { pid: container.proc.pid });
  },

  onCompilerShouldEmit(compiler, compilation) {
    this.logger.info(`>>> [${compiler.name}] compiler should emit`);

    return true;
  },
  onCompilerWatchRun(compiler, done) {
    this.logger.info(`>>> [${compiler.name}] watchRun`);
    done();
  },
  onCompilerBeforeCompile(compiler, compilationParams, done) {
    this.logger.info(`>>> [${compiler.name}] beforeCompile`);
    done();
  },
  onCompilerCompile(compiler, compilationParams) {
    this.logger.info(`>>> [${compiler.name}] compile`);
  },
  onCompilerThisCompilation(compiler, compilation, compilationParams) {
    this.logger.info(`>>> [${compiler.name}] thisCompilation`);
  },
  onCompilerCompilation(compiler, compilation, compilationParams) {
    this.logger.info(`>>> [${compiler.name}] compilation`);
  },
  onCompilerMake(compiler, compilation, done) {
    this.logger.info(`>>> [${compiler.name}] make`);
    done();
  },
  onCompilerEmit(compiler, compilation, done) {
    this.logger.info(`>>> [${compiler.name}] emit`);
    done();
  },
  onCompilerAfterEmit(compiler, compilation, done) {
    this.logger.info(`>>> [${compiler.name}] afterEmit`);
    done();
  },
  onCompilerDone(compiler, compilation, done) {
    this.logger.info(`>>> [${compiler.name}] done`);

    if (done) {
      done();
    }
  },
  onCompilerFailed(compiler, err) {
    this.logger.info(`>>> [${compiler.name}] failed`);
  },
  onCompilerInvalid(compiler, fileName, changeTime) {
    this.logger.info(`>>> [${compiler.name}] invalid: ${fileName}`);
  },
  onCompilerWatchClose(compiler) {
    this.logger.info(`>>> [${compiler.name}] watchClose`);
  },
  onBundleAvailable(bundle) {
    this.logger.info(`>>> [${bundle.compiler.name}] bundleAvailable ${bundle.mainOutputPath}`);
  },
  prepareWebpackCompiler(compiler) {
    this.logger.info(`>> prepare compiler ${compiler.name}`);
  },
  prepareWebpackConfig(compiler) {
    this.logger.info(`>> prepare webpack config ${compiler.name}`);
  },
};
