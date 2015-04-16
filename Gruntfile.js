module.exports = function (grunt) {
  'use strict';

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    lessPath: 'app/less',
    lessFile: '<%= lessPath %>/main.less',

    cssPath: 'public/assets/css',
    cssFile: '<%= cssPath %>/<%= pkg.name %>.css',

    clean: ['<%= cssPath %>'],

    less: {
      development: {
        options: {
          paths: ['<%= lessPath %>'],
          sourceMap: true,
          sourceMapFilename: '<%= cssPath %>/<%= pkg.name %>.map',
          sourceMapURL: '/<%= cssPath %>/<%= pkg.name %>.map',
          sourceMapRootpath: '../../../'
        },
        files: {
          '<%= cssFile %>': '<%= lessFile %>'
        }
      }
    },

    watch: {
      less: {
        files: '<%= lessPath %>/**/*.less',
        tasks: ['less:development'],
        options: {
          livereload: true
        }
      }
    }

  });

  require('load-grunt-tasks')(grunt, {
    scope: 'devDependencies'
  });

  grunt.registerTask('build', [
    'clean',
    'less'
  ]);

  grunt.registerTask('default', ['build']);

};