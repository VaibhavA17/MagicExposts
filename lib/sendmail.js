// const { magicExportsEmail } = require('../constants');



// var Brevo = require('@getbrevo/brevo');
// var defaultClient = Brevo.ApiClient.instance;

// var partnerKey = defaultClient.authentications['partner-key'];
// partnerKey.apiKey = process.env.BREVO_API_KEY;
// var apiKey = defaultClient.authentications['api-key'];
// apiKey.apiKey = process.env.BREVO_API_KEY;

// var apiInstance = new Brevo.TransactionalEmailsApi();

// var sendSmtpEmail = new Brevo.SendSmtpEmail();

// exports.sendMail = async (req, res) => {
//   sendSmtpEmail.sender = { "name": "test user", "email": "test@sample.com" };
//   sendSmtpEmail.to = [{ "name": "Vaibhav", "email": "iamvaibhav.agarwal@gmail.com" }];
//   sendSmtpEmail.subject = "Contact Form";
//   sendSmtpEmail.htmlContent = "This is a test email";
//   sendSmtpEmail.replyTo = { "name": "test user", "email": "vaibhavag13s@gmail.com" };
//   sendSmtpEmail.headers = { "X-Mailin-custom": `partner-key:${process.env.BREVO_API_KEY}|api-key:${process.env.BREVO_API_KEY}`};
//   sendSmtpEmail.params = { "parameter": "My param value", "subject": "contact form" };
//   sendSmtpEmail.tags = ["contact"];
//   sendSmtpEmail.templateId = 1;

//   await apiInstance.sendTransacEmail(sendSmtpEmail).then(function (data) {
//     console.log('API called successfully. Returned data: ' + data);
//   }, function (error) {
//     console.error(error);
//   });
// }





