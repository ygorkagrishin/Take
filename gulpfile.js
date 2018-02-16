var gulp = require( 'gulp' ),
    pug = require( 'gulp-pug' ),
    styl = require( 'gulp-stylus' ),
    maps = require( 'gulp-sourcemaps' ),
    pref = require( 'gulp-autoprefixer' ),
    plum = require( 'gulp-plumber' ),
    uglify = require( 'gulp-uglify' ),
    concat = require( 'gulp-concat' ),
    path = {
        src: {
            pug: 'src/pug/*.pug',
            stylus: 'src/static/stylus/*.styl',
            scripts: 'src/static/scripts/*.js',
            fonts: 'src/static/fonts/**/*',
            image: 'src/static/image/**/*',
            lib: 'src/static/lib/**/**/**/*'
        },
        build: {
            pug: 'build/',
            stylus: 'build/',
            scripts: 'build/',
            fonts: 'build/fonts/',
            image: 'build/image/',
            lib: 'build/lib/'
        },
        watch: {
            pug: 'src/pug/**/*.pug',
            stylus: 'src/static/stylus/**/**/**/*.styl',
            scripts: 'src/static/scripts/*.js',
            fonts: 'src/static/fonts/**/*',
            image: 'src/static/image/**/*',
            lib: 'src/static/lib/**/**/*'
        }
    };

gulp.task( 'pug', function () {
    return gulp.src( path.src.pug )
               .pipe( pug() )
               .pipe( gulp.dest( path.build.pug ) )
});

gulp.task( 'styl', function () {
    return gulp.src( path.src.stylus )
               .pipe( maps.init() )
               .pipe( styl({
                   compress: true,
                   'include css': true
               }) )
               .pipe( plum() )
               .pipe( pref() )
               .pipe( maps.write() )
               .pipe( gulp.dest( path.build.stylus ) )
});

gulp.task( 'scripts', function () {
    return gulp.src( path.src.scripts )
               .pipe( uglify() )
               .pipe( concat( 'main.js' ) )
               .pipe( gulp.dest( path.build.scripts ) )
});

gulp.task( 'fonts', function () {
    return gulp.src( path.src.fonts )
               .pipe( gulp.dest( path.build.fonts ) )
});

gulp.task( 'img', function () {
    return gulp.src( path.src.image )
               .pipe( gulp.dest( path.build.image ) )
});

gulp.task( 'lib', function () {
    return gulp.src( path.src.lib )
               .pipe( gulp.dest( path.build.lib ) )
});

gulp.task( 'watch', function () {
    gulp.watch( path.watch.pug, gulp.series( 'pug' ) )
    gulp.watch( path.watch.stylus, gulp.series( 'styl' ) )
    gulp.watch( path.watch.scripts, gulp.series( 'scripts' ) )
    gulp.watch( path.watch.image, gulp.series( 'img' ) )
    gulp.watch( path.watch.fonts, gulp.series( 'fonts' ) )
    gulp.watch( path.watch.lib, gulp.series( 'lib' ) )
});

gulp.task( 'default', gulp.parallel( gulp.series( 'pug', 'styl', 'fonts', 'img', 'scripts', 'lib' ), 'watch' ) );

