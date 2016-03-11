module.exports = function(grunt) {
	grunt.initConfig({
		watch: {
		  sass: {
		    files: ['css/*.scss', 'css/layouts/*.scss', 'css/modules/*.scss'],
		    tasks: ['sass'],
		  },
		},
		sass: {
			css: {
				files: {
					'css/main.css': 'css/main.scss'
				},
			},
		},
		browserSync: {
            dev: {
                bsFiles: {
                    src : [
                        'css/*.css',
                        'css/layouts/*.css',
                        'css/modules/*.css',
                        '*.html',
                        'js/*.js',
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