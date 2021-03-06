module.exports = function (grunt) {

	grunt.initConfig({

		// less
		less: {
			development: {
				options: {
					compress: true,
					yuicompress: true,
					optimization: 2
				},
				files: {
					"style.css": "includes/assets/less/style.less"
				}
			}
		},

		watch: {
			styles: {
				files: ['includes/assets/less/*.less'],
				tasks: ['less'],
				options: {
					nospawn: true
				}
			}
		},

	});

	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['watch', 'less']);
};