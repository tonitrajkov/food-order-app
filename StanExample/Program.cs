using System;
using STAN.Client;

namespace StanExample
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");

            Test();

            Console.Read();
        }

        static void Test()
        {
            //    var cf = new StanConnectionFactory();
            //    var c = cf.CreateConnection("tonistream", "client-123");

            var cf = new StanConnectionFactory();
            using (var c = cf.CreateConnection("tonistream", "foodorder"))
            {
                using (c.Subscribe("foo", (obj, args) =>
                {
                    Console.WriteLine(
                        System.Text.Encoding.UTF8.GetString(args.Message.Data));
                }))
                {
                    c.Publish("foo", System.Text.Encoding.UTF8.GetBytes("hello"));
                }
            }
        }
    }
}
