module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      files: ['Gruntfile.js', 'src/*.js'],
      test: ['Gruntfile.js', 'test/**/*.js']
    },
    watch: {
      js: {
        files: ['src/**/*.js'],
        tasks: ['jshint', 'browserify']
      },
      compass: {
        files: ['src/**/*.scss'],
        tasks: ['compass']
      },
      combineCss: {
        files: ['dist/**/*.css'],
        tasks: ['concat:css']
      },
      combineJs: {
        files: ['dist/**/*.js'],
        tasks: ['concat:js']
      },
      minCss: {
        files: ['static/css/style.css'],
        tasks: ['cssmin']
      },
      minJs: {
        files: ['static/js/client.js'],
        tasks: ['uglify']
      }
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
          'dist/js/client.js': ['src/**/*.js']
        }
      }
    },
    compass: {
      dist: {
        options: {
          sassDir: 'src/sass',
          cssDir: 'dist/css'
        }
      }
    },
    concat: {
      css: {
        src: ['dist/**/*.css'],
        dest: 'static/css/style.css'
      },
      js: {
        src: ['dist/**/*.js'],
        dest: 'static/js/client.js'
      }
    },
    cssmin: {
      minify: {
        files: {
          'static/css/style.min.css': ['static/css/style.css']
        }
      }
    },
    uglify: {
      minify: {
        files: {
          'static/js/client.min.js': ['static/js/client.js']
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
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('build', ['browserify', 'compass', 'concat', 'connect', 'watch']);
  grunt.registerTask('release', ['browserify', 'compass', 'concat', 'cssmin', 'uglify', 'connect', 'watch']);
  grunt.registerTask('default', ['jshint', 'build']);
  grunt.registerTask('test', ['browserify', 'jshint', 'mochaTest']);
};
