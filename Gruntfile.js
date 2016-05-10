 module.exports = function(grunt) {

    grunt.initConfig({
        sass: {
            options: {
                outputStyle: 'expanded'
            },
	        dist: {
	            files: [{
	                expand: true,
	                cwd: 'sass/', //sass folder
	                src: '*.scss',
	                dest: 'css/',
	                ext: '.css'
	            }]
	        }
	    }

    });

    // Load NPM Tasks
    grunt.loadNpmTasks('grunt-sass');

    // Register Grunt tasks
//    grunt.registerTask('default', ['clean:pre', 'compass', 'sassdown', 'clean:post']);
  
};