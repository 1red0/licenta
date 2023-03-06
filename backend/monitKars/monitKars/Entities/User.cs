using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Numerics;

namespace monitKars.Entities
{
    public class User
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public string? Id { get; set; }
        public string? Email { get; set; }
        public string? Email_constraint { get; set; }
        public string? Email_verified { get; set; }
        public bool? Enabled { get; set; }
        public string? Federation_link { get; set; }
        public string? First_name { get; set; }
        public string? Last_name { get; set; }
        public string? Realm_Id { get; set; }
        public string? Username { get; set; }
        public BigInteger? Created_timestamp { get; set; }
        public string? Service_account_client_link { get; set; }
        public string? Not_before { get; set; }

    }
}
