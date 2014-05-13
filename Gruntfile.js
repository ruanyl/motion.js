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
        tasks: ['jshint', 'concat:js']
      },
      compass: {
        files: ['src/**/*.scss'],
        tasks: ['compass']
      },
      combineCss: {
        files: ['dist/**/*.css'],
        tasks: ['concat:css']
      },
      minCss: {
        files: ['dist/css/motion.css'],
        tasks: ['cssmin']
      },
      minJs: {
        files: ['dist/js/motion.js'],
        tasks: ['uglify']
      },
      copyCss: {
        files: ['dist/css/motion.min.css'],
        tasks: ['copy:css']
      },
      copyJs: {
        files: ['dist/js/motion.min.js'],
        tasks: ['copy:js']
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
        dest: 'static/css/motion.css'
      },
      js: {
        options: {
          stripBanners: true,
          banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
            '<%= grunt.template.today("yyyy-mm-dd") %> */\n',
        },
        files: {
          'dist/js/motion.js': ['src/js/Motion.js', 'src/js/*.js'],
        }
      }
    },
    cssmin: {
      minify: {
        files: {
          'dist/css/motion.min.css': ['dist/css/motion.css']
        }
      }
    },
    uglify: {
      minify: {
        files: {
          'dist/js/motion.min.js': ['dist/js/motion.js']
        }
      }
    },
    copy: {
      css: {
        expand: true,
        flatten: true,
        src: ['dist/css/motion.min.css', 'dist/css/motion.css'],
        dest: 'static/css/'
      },
      js: {
        expand: true,
        flatten: true,
        src: ['dist/js/motion.min.js', 'dist/js/motion.js'],
        dest: 'static/js/'
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
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('build', ['jshint', 'compass', 'concat', 'cssmin', 'uglify', 'copy', 'watch']);
  grunt.registerTask('server', ['jshint', 'compass', 'concat', 'cssmin', 'uglify', 'copy', 'connect', 'watch']);
  grunt.registerTask('default', ['server']);
  grunt.registerTask('test', ['jshint', 'mochaTest']);
};
