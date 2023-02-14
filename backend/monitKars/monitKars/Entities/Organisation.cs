using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace monitKars.Entities
{
    public class Organisation
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid OrganisationID { get; set; }
        public string? OrganisationName { get; set; }
        public string? OrganisationMail { get; set; }
        public string? OrganisationPhone { get; set; }
        public string? OrganisationAddress { get; set; }
        public int? NumberOfCars { get; set; }
        public int? NumberOfDrivers { get; set; }

    }
}
