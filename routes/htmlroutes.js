const router = require("express").Router()


module.exports = function(app) {
    app.get('/notes', function (req, res) {
        console.log(__dirname)
    return res.sendFile("notes.html", {root:__dirname+"/../public"})
    // this is the route to get notes.html
    })

    app.get(`*`, function (req, res) {
        return res.sendFile(`*`, {root:__dirname+"/../public"})
    })
  };

//   * GET `*` - Should return the `index.html` file