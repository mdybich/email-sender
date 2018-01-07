using System;
using EmailSender.Models;
using System.Net.Mail;
using System.Net;

namespace EmailSender.Services
{
    public class MailService : IMailService
    {
        private readonly string _hostMailAddress = "anonimowy.email.2018@gmail.com";

        public void SendMail(SendMailModel model)
        {
            var message = new MailMessage();
            var client = new SmtpClient();

            try
            {
                message.From = new MailAddress(_hostMailAddress);
                message.To.Add(model.Receiver);
                message.Subject = model.Topic;
                message.Body = model.Content;

                client.Host = "smtp.gmail.com";
                client.Port = 587;
                client.Credentials = new NetworkCredential(_hostMailAddress, "Test1234%");
                client.EnableSsl = true;

                client.Send(message);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
            }
        }
    }
}