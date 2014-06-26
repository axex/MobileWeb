var session = require("../data/session");

module.exports = function (server) {
    server.post('/api/session', function (req, res) {
        var response = isAuthorized() ? session.create : session.reject;
        res.status(200).send(response);

        function isAuthorized() {
            return req.body.number === '10000' && req.body.password === 'Test!123';
        }
    });

    server.delete('/api/session', function (req, res) {
        res.status(200).send(session.destroy);
    });
};