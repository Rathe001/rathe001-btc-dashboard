module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
                sourceMap: true
			},
			project: {
				src: [
                    // Load main libraries first
                    'src/vendor/**/lib/*.js',
                    'src/vendor/**/modules/*.js',
                    'src/app/app.js',
                    'src/app/home/**/*.js'
				],
				dest: 'dist/js/<%= pkg.name %>.min.js'
			}
		},
        htmlmin: {
            index: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    'dist/index.html': 'index.html'
                }
            },
            home: {
                files: [{
                    expand: true,
                    cwd: 'src/app/home/views',
                    src: ['*.html'],
                    dest: 'dist/views'
                }]
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
        },
        connect: {
            options: {
                keepalive: true,
                port: 9000,
                base: 'dist'
            },
            server: {}
        },
	});

	// Load plugins
	grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-ngdocs');
    grunt.loadNpmTasks('grunt-contrib-connect');

	// Default task(s).
    grunt.registerTask('build', ['uglify', 'htmlmin', 'copy']);
    grunt.registerTask('server', ['connect']);

};