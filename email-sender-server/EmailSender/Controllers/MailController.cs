using EmailSender.Models;
using EmailSender.Services;
using System;
using System.Web.Http;


namespace EmailSender.Controllers
{
    public class MailController : ApiController
    {
        private readonly IMailService _service;

        public MailController()
        {
            _service = new MailService();
        }

        public IHttpActionResult Post([FromBody]SendMailModel model)
        {
            this._service.SendMail(model);

            return Ok();
        }
    }
}
