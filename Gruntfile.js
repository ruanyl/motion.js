module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      files: ['Gruntfile.js', 'src/*.js'],
      test: ['Gruntfile.js', 'test/**/*.js']
    },
    watch: {
      files: ['src/*.js'],
      tasks: ['jshint', 'browserify']
    },
    connect: {
      server: {
        options: {
          port: 8080,
          base: '.'
        }
      }
    },
    browserify: {
      dist: {
        files: {
          'static/js/client.js': ['src/*.js']
        }
      }
    },
    mochaTest: {
      test: {
        options: {
          reporter: 'spec'
        },
        src: ['test/**/*.js']
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-mocha-test');

  grunt.registerTask('default', ['browserify', 'jshint', 'connect', 'watch']);
  grunt.registerTask('test', ['browserify', 'jshint', 'mochaTest']);
};
