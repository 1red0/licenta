using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace monitKars.Entities
{
    public class User
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid UserID { get; set; }
        public string? FirstName { get; set; }
        public string? LastName { get; set; }
        public string? UserName { get; set; }
        public string? DateOfBirth { get; set; }
        public string? Email { get; set; }
        public string? phone { get; set; }
        public string? Gender { get; set; }
        public string? Role { get; set; }
        public int? OrganisationID { get; set; }
        public int? CarID { get; set; }
        public string? Password { get; set; }
    }
}
