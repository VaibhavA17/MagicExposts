var Brevo = require('@getbrevo/brevo');
var defaultClient = Brevo.ApiClient.instance;
const { magicExportsEmail } = require('../constants');

var partnerKey = defaultClient.authentications['partner-key'];
partnerKey.apiKey = process.env.BREVO_API_KEY;
var apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = process.env.BREVO_API_KEY;

var apiInstance = new Brevo.TransactionalEmailsApi();

var sendSmtpEmail = new Brevo.SendSmtpEmail();

exports.sendMail = async (req, res) => {
  const { name, email, number, message } = req.body;
  sendSmtpEmail.sender = { "name": name, "email": email };
  sendSmtpEmail.to = [{ "name": "Magic Exports", "email": magicExportsEmail }];
  sendSmtpEmail.subject = "Enquiry from " + name;
  sendSmtpEmail.htmlContent = `<html><body><p>Hi, I am ${name} and my email is ${email} and my number is ${number}.</p><p>${message}</p></body></html>`;
  sendSmtpEmail.replyTo = { "name": name, "email": email };
  sendSmtpEmail.headers = { "X-Mailin-custom": `partner-key:${process.env.BREVO_API_KEY}|api-key:${process.env.BREVO_API_KEY}` };
  sendSmtpEmail.tags = ["contact", "magicexports"];

  await apiInstance.sendTransacEmail(sendSmtpEmail).then(function (data) {
    console.log('API called successfully. Returned data: ' + data);
    res.status(200).json({ message: "Your message is received. Team will contact you soon!" })
  }, function (error) {
    console.error(error);
    res.status(500).json({ message: "Error Occured. Can not contact our team!" })
  });
}





