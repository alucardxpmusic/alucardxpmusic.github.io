module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    copy: {
        fonts: {
            expand: true,
            cwd: 'acmc/fonts',
            src: ['**/*'],
            dest: 'acmc/dist/fonts/',
        }
    },

    less: {
        compile: {
            files: {
                'acmc/styles/widget/widget.css' : 'acmc/widget/**/*.less'
            },
            options: {
                yuicompress: true
            }
        }
    },

    cssmin: {
      minAll: {
          options: {
              shorthandCompacting: false,
              roundingPrecision: -1,
              keepSpecialComments: 0
          },
          files: {
              'acmc/dist/css/all.css' : ['acmc/styles/vendor/bootstrap.css', 'acmc/styles/page/main.css', 'acmc/styles/widget/widget.css']
          }
      }
    },

    connect: {
      options: {
        port: 9001,
        livereload: true,
        base: 'acmc/',
        keepalive: false
      },
      dev: {},
      // Demo server accessible externally - useful e.g. for testing on iPad.
      demo: {
        options: {
          hostname: '*'
        }
      }
    },

    watch: {
      options: {
        cwd: 'acmc/',
        spawn: false,
        livereload: '<%= connect.options.livereload %>',
        atBegin: false
      },
      all: {
        files: './**'
      }
    },
  });

  grunt.registerTask('default', ['connect:dev', 'watch']);
  grunt.registerTask('demo', ['connect:demo', 'watch']);
  grunt.registerTask('all', ['less', 'cssmin', 'copy']);

};
