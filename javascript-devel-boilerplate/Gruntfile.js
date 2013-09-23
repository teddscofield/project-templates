
var LIVERELOAD_PORT = 44444;
var livereloadMiddleware = function (connect, options) {
  return [
    require('connect-livereload')({ port: LIVERELOAD_PORT }),
    connect.static(options.base),
    connect.directory(options.base)
  ];
};

module.exports = function(grunt) {

  // ------------------------------------------------------------------
  // grunt plugins
  // ------------------------------------------------------------------

  grunt.initConfig({

    jshint: {
      files: [
        'app/**/*.js',
        'test/**/*.js'
      ],
      options:{
        ignores:[
          'app/vendor/**/*.js'
        ]
      }
    },

    connect: {
      client: {
        options: {
          
          port: 9000,
          base:'./app',
          middleware: function (connect, options) {
            return [
              require('connect-livereload')({ port: LIVERELOAD_PORT }),
              connect.static(options.base),
              connect.directory(options.base)
            ];
          }

        }
      }
    },

    watch: {
      client: {
        files: ['app/**/*'],
        tasks:[],
        options: {
          livereload:LIVERELOAD_PORT
        }
      }
    }
  });

  // ------------------------------------------------------------------
  // tasks
  // ------------------------------------------------------------------

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  // development server
  grunt.registerTask('devserver', 'Development (node) server that will watch and reload', ['connect:client','watch:client']);

  grunt.registerTask('default','scan, build, test and run dev server',['jshint','devserver']);

  //
  // bower dependencies
  //
  grunt.registerTask('copy-bower-libs','Copy libs managed by bower to the app vendor folder',function(){

    var fs = require('fs');
    var bower_dir = './bower_components/';
    var vendor_dir = './app/vendor/';

    grunt.log.write('\nCopying Bower managed libs to vendor folder:\n');

    function do_copy(src,dst,log) {

      grunt.log.write('  '+bower_dir+src+' '+vendor_dir+dst+' ');
      grunt.file.copy(bower_dir+src,vendor_dir+dst);
      grunt.log.ok();

    }
    
    do_copy('requirejs/require.js','require.js');
    do_copy('jquery/jquery.js','jquery.js');
    do_copy('lodash/dist/lodash.js','lodash.js');
    do_copy('backbone/backbone.js','backbone.js');

    grunt.log.write('done!\n');
  });

};

// NOTES:
//
// adapted from 
// http://www.brianchu.com/blog/2013/07/11/grunt-by-example-a-tutorial-for-javascripts-task-runner/
// http://stackoverflow.com/questions/14166591/automate-npm-and-bower-install-with-grunt (xavier.seignard)