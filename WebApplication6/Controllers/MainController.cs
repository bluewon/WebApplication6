using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WebApplication6.Controllers
{
    public class MainController : Controller
    {
        // GET: Main
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult GroupMobile()
        {
            return View();
        }
        public  ActionResult SubLink()
        {
            return View();
        }
    }
    
}