const { sendMail, subscribe } = require('../lib/brevo.lib');

exports.contact = async (req, res) => {
    await sendMail(req, res);
};

exports.newsletter = async (req, res) => {
    await subscribe(req, res);
};