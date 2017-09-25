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
    
    // Compile pug
    pug: {
      compile: {
        options: {
          data: {
            debug: true
          }
        },
        files: {
          'build/index.html': ['src/pug/*.pug']
        }
      }
    },
    
    
  });
  
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('eslint-grunt');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-pug');
  
  // Start web server
  grunt.registerTask('build', ['eslint', 'uglify', 'sass', 'pug']);
};