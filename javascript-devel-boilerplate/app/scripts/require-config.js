requirejs.config({
    baseUrl: '..',
    paths: {
      jquery: 'vendor/jquery',
      require: 'vendor/require'
    },
  });

  // Bootstrap the application
  require(['scripts/main'], function(main) {
    console.log('require main');
  });