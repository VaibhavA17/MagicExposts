const { sendMail } = require('../lib/sendmail');

exports.contact = async (req, res) => {
    await sendMail(req, res);
};
