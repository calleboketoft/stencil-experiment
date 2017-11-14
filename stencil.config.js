exports.config = {
  bundles: [
    { components: ['my-name'] }
  ],
  collections: [
    { name: '@stencil/router' }
  ],
  generateDistribution: true
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
