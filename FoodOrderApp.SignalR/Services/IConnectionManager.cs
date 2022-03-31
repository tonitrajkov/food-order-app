using System;
using System.Collections.Generic;
using System.Text;

namespace FoodOrderApp.SignalR.Services
{
    public interface IConnectionManager
    {
        void AddConnection(string userName, string connectionId);
        void RemoveConnection(string connectionId);
        HashSet<string> GetConnections(string userName);
        IEnumerable<string> OnlineUsers { get; }
    }
}
