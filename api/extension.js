var extensions = require("../data/extensions");

module.exports = function (server) {
    server.get('api/extension', function (req,res) {
        res.status(200).send(extensions.get);
    });
};