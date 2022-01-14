using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Net;
using System.Net.Mail;

namespace Koolay.Controllers
{
    public class KoolayController : Controller
    {
        // GET: Koolay
        public ActionResult index()
        {
            return View();
        }

        //[HttpPost]
        //public JsonResult BeniCagir()
        //{
        //    return Json("done");
        //}         

        [HttpPost]
        public JsonResult index(Models.Email model)
        {
            MailMessage mailim = new MailMessage();
            mailim.To.Add("bilgi@ceptefaturam.com");
            mailim.From = new MailAddress("bilgi@ceptefaturam.com");
            mailim.Subject = "Koolay'den mesajınız var";
            mailim.Body = "Ad soyad:" + model.ad + " <br> Mail adresim:" + " " + model.email + " <br>Konu:" + model.konu + " <br>Mesaj:" + model.mesaj;
            mailim.IsBodyHtml = true;

            SmtpClient smtp = new SmtpClient();
            smtp.Credentials = new NetworkCredential("bilgi@ceptefaturam.com", "0M5azs0@");
            smtp.Port = 587;
            smtp.Host = "smtp.ceftefaturam.com";
            smtp.EnableSsl = false;

            try
            {
                smtp.Send(mailim);
            }
            catch (Exception)
            {

            }

            return Json("asdasd");
        }

        [HttpPost]
        public JsonResult home(Models.Email model)
        {
            MailMessage mailim = new MailMessage();
            mailim.To.Add("bilgi@ceptefaturam.com");
            mailim.From = new MailAddress("bilgi@ceptefaturam.com");
            mailim.Subject = "Message from Koolay";
            mailim.Body = "Ad soyad:" + model.ad + " <br> Mail adresim:" + " " + model.email + " <br>Konu:" + model.konu + " <br>Mesaj:" + model.mesaj;
            mailim.IsBodyHtml = true;

            SmtpClient smtp = new SmtpClient();
            smtp.Credentials = new NetworkCredential("bilgi@ceptefaturam.com", "0M5azs0@");
            smtp.Port = 587;
            smtp.Host = "smtp.ceftefaturam.com";
            smtp.EnableSsl = false;

            try
            {
                smtp.Send(mailim);
            }
            catch (Exception)
            {

            }

            return Json("asdasd");
        }

        public ActionResult hakkimizda()
        {
            return View();
        }

        public ActionResult ozellikler()
        {
            return View();
        }

        public ActionResult blog()
        {
            return View();
        }      
        
        public ActionResult eticaret()
        {
            return View();
        }

        public ActionResult internetten_giyim_satisi_nasil_yapilir()
        {
            return View();
        }        
       
        public ActionResult iletisim()
        {
            return View();
        }                

        public ActionResult home()
        {
            return View();
        }

        public ActionResult aboutUs()
        {
            return View();
        }

        public ActionResult features()
        {
            return View();
        }

        public ActionResult blogEn()
        {
            return View();
        }

        public ActionResult ecommerce()
        {
            return View();
        }

        public ActionResult contact()
        {
            return View();
        }

        public ActionResult online_clothing_sales()
        {
            return View();
        }
        
    }
}