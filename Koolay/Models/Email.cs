using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Koolay.Models
{
    public class Email
    {
        public string ad { get; set; }
        public string email { get; set; }
        public string konu { get; set; }
        public string mesaj { get; set; }

    }


    public class Message
    {
        public bool IsSuccess { get; set; }
        public bool message { get; set; }
    }
}