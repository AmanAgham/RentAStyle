package ecommerce.services;

import java.util.Properties;

import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

import org.springframework.stereotype.Service;

@Service
public class EmailSendingServiceImpl implements IEmailSEndingService {

		
	@Override
	public void sendEmail(String to, String messageBody, String subject) {


		String from = "anveshmodak99@gmail.com";

		// need of this method is to set the properties in this class
		Properties properties = System.getProperties();

		// setup of mail server
		properties.putIfAbsent("mail.smtp.host", "smtp.gmail.com");
		properties.put("mail.smtp.port", "587");
		properties.putIfAbsent("mail.smtp.ssl.enable", "true");
		properties.put("mail.smtp.auth", "false");
//		properties.put("mail.smtp.auth", "false");

		Session session = Session.getInstance(properties, new javax.mail.Authenticator() {
		  	protected PasswordAuthentication getPasswordAuthentication() {
				return new PasswordAuthentication(from, "ueoozwgagfdptaen"); 
			}
		});

		// used to debug smtp issues"
		session.setDebug(true);

		try {

			// creating a default MimeMessage instance
			Message message = new MimeMessage(session);

			// set from : header field of the header
			message.setFrom(new InternetAddress(from));
			System.out.println(message.getFrom().toString());
			
			// set to: header field of the header
			message.addRecipient(Message.RecipientType.TO, new InternetAddress(to));

			// set subject :header field
			message.setSubject(subject);
			

			// set the message body
			message.setText(messageBody);
			message.setDescription(messageBody);
			message.setContent(messageBody, "text/html");
			

			// sending mail
			Transport.send(message);
			
			System.out.println("done");
			

		} catch (MessagingException excp) {
			excp.getMessage();
		}
		
	}

}
