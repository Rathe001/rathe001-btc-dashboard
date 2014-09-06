module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			},
			project: {
				src: [
                    'vendor/**/*.js',
                    'src/app/app.js',
                    'src/app/**/*.js'

				],
				dest: 'dist/js/<%= pkg.name %>.min.js'
			}
		},
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    'dist/index.html': 'index.html'
                }
            }
        },
        copy: {
            images: {
                files: [
                    {
                        expand: true,
                        cwd: 'src/img',
                        src: ['**/*'],
                        dest:'dist/img'
                    }
                ]
            }
        },
        ngdocs: {
            options: {
                dest: 'docs',
                html5Mode: true,
                startPage: '../docs/api',
                title: "BTC Dashboard Docs",
                imageLink: "http://astigmapro.com",
                titleLink: "/api",
                bestMatch: true
            },
            api: {
                src: ['src/**/*.js', '!src/**/*.spec.js'],
                title: 'API Documentation'
            }
        }
	});

	// Load plugins
	grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-ngdocs');

	// Default task(s).
    grunt.registerTask('default', ['uglify', 'htmlmin', 'copy', 'ngdocs']);
};