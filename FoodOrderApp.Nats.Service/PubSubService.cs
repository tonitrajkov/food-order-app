using System;
using System.IO;
using System.Runtime.Serialization.Formatters.Binary;
using STAN.Client;

namespace FoodOrderApp.Nats.Service
{
    public class PubSubService : IPubSubService
    {
        private const string CLUSTER_ID = "tonistream";
        private const string CLIENT_ID = "foodorder";
        public void Publish(object message)
        {
            var cf = new StanConnectionFactory();
            using (var c = cf.CreateConnection(CLUSTER_ID, CLIENT_ID))
            {
                var messageArray = SerializeToByteArray(message);
                c.Publish("foo", messageArray);

            }
        }

        private byte[] SerializeToByteArray(object obj)
        {
            if (obj == null)
            {
                return null;
            }
            var bf = new BinaryFormatter();
            using (var ms = new MemoryStream())
            {
                bf.Serialize(ms, obj);
                return ms.ToArray();
            }
        }
    }
}
