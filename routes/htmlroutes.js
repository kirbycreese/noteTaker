const router = require("express").Router()
// * The following HTML routes should be created:

//   * GET `/notes` - Should return the `notes.html` file.

//   * GET `*` - Should return the `index.html` file
module.exports = function(app) {
    app.get('/notes', function (req, res) {
        console.log(__dirname)
    return res.sendFile("notes.html", {root:__dirname+"/../public"})//get notes.html
    })
  };
