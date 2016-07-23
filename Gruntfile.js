module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
      options: {
        globals: {
          jQuery: false
        }
      }
    },
    uglify: {
      build: {
        files: {'dist/js/perfmatters.js': 'src/js/perfmatters.js',
                'dist/views/js/main.js': 'src/views/js/main.js'}
      }
    },
    copy: {
      main: {
        files: [
          {expand: true, cwd: 'src', src: 'css/*', dest: 'dist/'},
          {expand: true, cwd: 'src', src: 'img/*', dest: 'dist/'},
          {expand:true, cwd: 'src', src:'views/css/*', dest: 'dist/'},
          {expand:true, cwd: 'src', src:'views/images/*', dest: 'dist/'},
          {expand:true, cwd: 'src', src:'*', dest: 'dist/'},
          {expand:true, cwd: 'src', src:'views/*', dest: 'dist/'}
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('default', ['copy', 'uglify']);

};