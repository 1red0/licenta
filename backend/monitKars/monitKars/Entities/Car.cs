using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace monitKars.Entities
{
    public class Car
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int CarID { get; set; }
        public string? CarName { get; set; }
        public int? CarYear { get; set; }
        public string? CarColor { get; set; }
        public string? CarVignette { get; set; }
        public string? CarInsurance { get; set; }
        public int? CarOwnerID { get; set; }
        public string? CarMilage { get; set; }
        public string? CarMaintenanceStatus { get; set; }
        public string? CarManufacturer { get; set; }
        public string? CarModel { get; set; }
        public string? CarEngine { get; set; }
        public string[]? CarTireSizes { get; set; }
        public string? CarOil { get; set; }
        public string? CarPeriodicRevision { get; set; }
        public string? CarPlateNumber { get; set; }
        public string? CarVinNumber { get; set; }
        public string? CarType { get; set; }

    }
}
