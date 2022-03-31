using System;
using System.Collections.Generic;
using System.Text;

namespace FoodOrderApp.Nats.Service
{
    public interface IPubSubService
    {
        void Publish(object message);
    }
}
