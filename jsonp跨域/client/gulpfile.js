let fs = require("fs")
const gulp = require("gulp")
const webserver = require("gulp-webserver")
let result = fs.readFileSync("./index.html", "utf-8")
gulp.task("api", () => {
    gulp.src('./')
        .pipe(webserver({
            host: "localhost",
            port: 8000,
            middleware(req, res) {
                res.end(result)
            }
        }))
})
