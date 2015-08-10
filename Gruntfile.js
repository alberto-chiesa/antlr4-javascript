module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    browserify: {
      antlr: {
        src: './src/antlr4/index.js',
        dest: './build/antlrJsTarget.js'
      }
    },
		
		uglify: {
			options: {
				screwIE8: true
			},
			antlr: {
				src: './build/antlrJsTarget.js',
				dest: './build/antlrJsTarget.min.js'
			}
		}

  });

  grunt.registerTask('default', ['browserify', 'uglify']);
};
