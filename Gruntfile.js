module.exports = function(grunt) {
	grunt.initConfig({
		watch: {
		  sass: {
		    files: ['css/sass/*.scss'],
		    tasks: ['sass'],
		  },
		},
		sass: {
			css: {
				files: {
					'css/main.css': 'css/sass/main.scss'
				},
			},
		},
		browserSync: {
            dev: {
                bsFiles: {
                    src : [
                        'css/*.css',
                        '*.html',
                        'js/*.js'
                    ]
                },
                options: {
                    watchTask: true,
                    server: './'
                }
            }
        }
	});


	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-browser-sync');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.registerTask('default', ['browserSync', 'watch']);
};


