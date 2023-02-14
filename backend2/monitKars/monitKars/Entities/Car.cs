using System.ComponentModel.DataAnnotations.Schema;

namespace monitKars.Entities
{
    public class Car
    {
        public int carID { get; set; }
        public string carName { get; set; }
        public int year { get; set; }
        public string color { get; set; }
        public string vignette { get; set; }
        public string insurance { get; set; }
        public int ownerID { get; set; }
        public string milage { get; set; }
        public string maintenanceStatus { get; set; }
        public string manufacturer { get; set; }
        public string model { get; set; }
        public string engine { get; set; }
        public string[] tireSizes { get; set; }
        public string oil { get; set; }
        public string periodicRevision { get; set; }
        public string plateNumber { get; set; }
        public string vinNumber { get; set; }
        public string type { get; set; }

    }
}
