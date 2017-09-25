module.exports = function(grunt) {
  
  grunt.initConfig({
    
    // watcher files
    watch: {
      scripts: {
        files: ['**/*.js', 'src/js/*.js', 'src/scss/*.scss', 'src/pug/*.pug'],
        tasks: ['eslint', ],
        options: {
          spawn: false,
        },
      },
    },
    
    // Linter JS with eslint
    eslint: {
      all: ['**/*.js'],
    },
    
    // Compile SASS
    sass: {
      dist: {
        options: {
          style: 'expanded'
        },
        files: {
          'build/css/style.css': 'src/scss/main.scss'
        }
      }
    },
    
  });
  
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('eslint-grunt');
  grunt.loadNpmTasks('grunt-contrib-sass');
  
  
};