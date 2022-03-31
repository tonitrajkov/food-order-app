using System;
using Microsoft.AspNetCore.Mvc;

namespace FoodOrderApp.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {

        [HttpGet]
        public IActionResult GenerateUserIdenity()
        {
            var userId = int.Parse(DateTime.Now.Ticks.ToString().Substring(12));
            return Ok(userId);
        }
    }
}