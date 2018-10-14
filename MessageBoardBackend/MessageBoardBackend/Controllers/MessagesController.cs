using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MessageBoardBackend.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace MessageBoardBackend.Controllers
{
    [Produces("application/json")]
    [Route("api/Messages")]
    public class MessagesController : Controller
    {
        static List<Message> messages = new List<Message>()
            {
                new Message
                {
                    Text="Hello",
                    Owner="John"
                },
                new Message
                {
                    Text="Hi!",
                    Owner="Jane"
                }
            };

        [HttpGet]
        public IEnumerable<Message> Get()
        {
            return messages; 
        }
        [HttpGet("{name}")]
        public IEnumerable<Message> Get(string name)
        {
            return messages.FindAll(m => m.Owner == name);
        }

        [HttpPost]
        public Message Post([FromBody]Message message)
        {
            messages.Add(message);
            return message;
        }

        [HttpDelete]
        public void Delete([FromBody] Message message)
        {
            messages.Remove(message);
        }
    }
}