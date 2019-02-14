const gulp = require('gulp')
const webserver = require('gulp-webserver')
gulp.task("server", () => {
    gulp.src('./')
        .pipe(webserver({
            host: "localhost",
            port: 8080,
            middleware(req, res) {
                const data = { name: "neinei", age: 19 }
                res.writeHead(200, {
                    'Content-Type': 'application/json;charset=utf-8',
                    'Access-Control-Allow-Credentials': true,
                    'Access-Control-Allow-Origin': '*'
                })
                res.end(JSON.stringify(data))
            }
        }))
})
