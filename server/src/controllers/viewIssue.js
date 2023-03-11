const request = require('request');
const config = require("../config");

const viewIssue = async (req, res) => {
        const options = {
        url: 'https://api.github.com/repos/kubernetes-sigs/aws-load-balancer-controller/issues?is:open&per_page=50&page=2',
        headers: {
            'User-Agent': 'request',
            'Authorization': config.port
        }
    };

    request(options, (error, response, body) => {
        if (!error && response.statusCode == 200) {
            const issues = JSON.parse(body);
            res.send(issues);
        }
    });
};

module.exports = {
    viewIssue,
}