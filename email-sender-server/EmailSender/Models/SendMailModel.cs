using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EmailSender.Models
{
    public class SendMailModel
    {
        public string Receiver { get; set; }
        public string Topic { get; set; }
        public string Content { get; set; }
    }
}