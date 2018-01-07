using EmailSender.Models;

namespace EmailSender.Services
{
    public interface IMailService
    {
        void SendMail(SendMailModel model);
    }
}
