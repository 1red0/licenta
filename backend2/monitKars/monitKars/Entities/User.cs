using System.Text.Json.Serialization;

namespace monitKars.Entities
{
    public class User
    {
        public int userID { get; set; }
        public string firstName { get; set; }
        public string lastName { get; set; }
        public string userName { get; set; }
        public string dateOfBirth { get; set; }
        public string email { get; set; }
        public string phone { get; set; }
        public string gender { get; set; }
        public string role { get; set; }
        public int organisationID { get; set; }
        public int carID { get; set; }
        public string password { get; set; }
    }
}
