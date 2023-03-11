require("dotenv").config()

const config = {
    port: process.env.PORT || 3001,
    token: process.env.ghptoken || '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',
};

module.exports = config;
