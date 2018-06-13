const sendgrid = require('sendgrid');
const helper = sendgrid.mail;

const keys = require('../config/keys');

class Mailer extends helper.Mail {
	constructor({ subject, recipients }, content) {
		super();
		this.from_email = new helper.Email('@no-reply@feedbacky.com');
		this.subjcet = subject;
		this.body = new helper.Content('text/html', content);
		this.recipients = this.frometAddresses(recipients);

		this.addContent(this.body);
	}

	formatAddresses(recipients) {
		return recipients.map(({ email }) => new helper.Email(email));
	}
}

module.exports = Mailer;
