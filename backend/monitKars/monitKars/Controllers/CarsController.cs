using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using monitKars.Data;
using monitKars.Entities;

namespace monitKars.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CarsController : ControllerBase
    {
        private readonly DataContext _context;

        public CarsController(DataContext context)
        {
            _context = context;
        }

        // GET: api/Cars
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Car>>> GetCars()
        {
            return await _context.Cars.ToListAsync();
        }

        // GET: api/Cars
        [HttpGet("searchCar/{searchQuery}")]
        public async Task<ActionResult<IEnumerable<Car>>> GetCars(string searchQuery)
        {
            var cars = await _context.Cars
                .Where(car => car.CarName.Contains(searchQuery) ||
                              car.CarVinNumber.Contains(searchQuery) ||
                              car.CarPlateNumber.Contains(searchQuery))
                .ToListAsync();

            return cars;
        }


        // GET: api/Cars/noCars
        [HttpGet("noCars")]
        public async Task<ActionResult<int>> GetNoCars()
        {
            return await _context.Cars.CountAsync();
        }

        // GET: api/Cars/manufacturers
        [HttpGet("manufacturers")]
        public async Task<ActionResult<IEnumerable<string?>>> GetManufacturers()
        {
            return await _context.Cars.Select(m => m.CarManufacturer).Distinct().ToListAsync();
        }

        // GET: api/Cars/statuses
        [HttpGet("statuses")]
        public async Task<ActionResult<IEnumerable<string?>>> GetStatuses()
        {
            return await _context.Cars.Select(m => m.CarMaintenanceStatus).Distinct().ToListAsync();
        }

        // GET: api/Cars/noCars/{manufacturer}
        [HttpGet("noCars/{manufacturer}")]
        public async Task<ActionResult<int>> GetNoCarsOfManufacturers(string manufacturer)
        {
            return await _context.Cars.Where(m => m.CarManufacturer == manufacturer).CountAsync();
        }

        // GET: api/Cars/driverCars/{driver}
        [HttpGet("driverCars/{driver}")]
        public async Task<ActionResult<IEnumerable<Car>>> GetCarsOfDriver(string driver)
        {
            return await _context.Cars.Where(m => m.CarOwnerID == driver).ToListAsync();
        }

        // GET: api/Cars/milage
        [HttpGet("milage")]
        public async Task<ActionResult<IEnumerable<CarMilageDTO>>> GetCarsMilage()
        {
            var cars = await _context.Cars.ToListAsync();
            var carMilages = cars.Select(car => new CarMilageDTO
            {
                CarID = car.CarID,
                CarName = car.CarName,
                CarMilage = car.CarMilage
            }).ToList();

            return carMilages;
        }

        // GET: api/Cars/driverNoCars/{driver}
        [HttpGet("driverNoCars/{driver}")]
        public async Task<ActionResult<int>> GetNoCarsOfDriver(string driver)
        {
            return await _context.Cars.Where(m => m.CarOwnerID == driver).CountAsync();
        }

        // GET: api/Cars/noCarsStatus/{status}
        [HttpGet("noCarsStatus/{status}")]
        public async Task<ActionResult<int>> GetNoCarsOfStatus(string status)
        {
            return await _context.Cars.Where(m => m.CarMaintenanceStatus == status).CountAsync();
        }

        // GET: api/Cars/CarsStatus/{status}
        [HttpGet("CarsStatus/{status}")]
        public async Task<ActionResult<IEnumerable<Car>>> GetCarsOfStatus(string status)
        {
            return await _context.Cars.Where(m => m.CarMaintenanceStatus == status).ToListAsync();
        }

        // GET: api/Cars/NoFreeCars
        [HttpGet("NoFreeCars")]
        public async Task<ActionResult<int>> GetNoCarsNODriver()
        {
            return await _context.Cars.Where(m => m.CarOwnerID == "").CountAsync();
        }

        // GET: api/Cars/NoTakenCars
        [HttpGet("NoTakenCars")]
        public async Task<ActionResult<int>> GetNoCarsWithDriver()
        {
            return await _context.Cars.Where(m => m.CarOwnerID != "").CountAsync();
        }

        // GET: api/Cars/NoVignetteValidCars
        [HttpGet("NoVignetteValidCars")]
        public async Task<ActionResult<int>> GetNoVignetteValidCars()
        {
            DateTime currentDate = DateTime.Now;

            return await _context.Cars.ToListAsync().ContinueWith(cars => cars.Result.Count(c => DateTime.Parse(c.CarVignette) > currentDate));
        }

        // GET: api/Cars/NoVignetteInvalidCars
        [HttpGet("NoVignetteInvalidCars")]
        public async Task<ActionResult<int>> GetNoVignetteInValidCars()
        {
            DateTime currentDate = DateTime.Now;

            return await _context.Cars.ToListAsync().ContinueWith(cars => cars.Result.Count(c => DateTime.Parse(c.CarVignette) <= currentDate));
        }


        // GET: api/Cars/NoInsuranceValidCars
        [HttpGet("NoInsuranceValidCars")]
        public async Task<ActionResult<int>> GetNoInsuranceValidCars()
        {
            DateTime currentDate = DateTime.Now;

            return await _context.Cars.ToListAsync().ContinueWith(cars => cars.Result.Count(c => DateTime.Parse(c.CarInsurance) > currentDate));
        }

        // GET: api/Cars/NoInsuranceInvalidCars
        [HttpGet("NoInsuranceInvalidCars")]
        public async Task<ActionResult<int>> GetNoInsuranceInValidCars()
        {
            DateTime currentDate = DateTime.Now;

            return await _context.Cars.ToListAsync().ContinueWith(cars => cars.Result.Count(c => DateTime.Parse(c.CarInsurance) <= currentDate));
        }

        // GET: api/Cars/NoInspectionValidCars
        [HttpGet("NoInspectionValidCars")]
        public async Task<ActionResult<int>> GetNoInspectionValidCars()
        {
            DateTime currentDate = DateTime.Now;

            return await _context.Cars.ToListAsync().ContinueWith(cars => cars.Result.Count(c => DateTime.Parse(c.CarPeriodicRevision) > currentDate));

        }

        // GET: api/Cars/NoInspectionInvalidCars
        [HttpGet("NoInspectionInvalidCars")]
        public async Task<ActionResult<int>> GetNoInspectionInValidCars()
        {
            DateTime currentDate = DateTime.Now;

            return await _context.Cars.ToListAsync().ContinueWith(cars => cars.Result.Count(c => DateTime.Parse(c.CarPeriodicRevision) <= currentDate));

        }

        // GET: api/Cars/FreeCars
        [HttpGet("FreeCars")]
        public async Task<ActionResult<IEnumerable<Car>>> GetCarsNODriver()
        {
            return await _context.Cars.Where(m => m.CarOwnerID == "").ToListAsync();
        }

        // GET: api/Cars/TakenCars
        [HttpGet("TakenCars")]
        public async Task<ActionResult<IEnumerable<Car>>> GetCarsWithDriver()
        {
            return await _context.Cars.Where(m => m.CarOwnerID != "").ToListAsync();
        }

        // GET: api/Cars/VignetteValidCars
        [HttpGet("VignetteValidCars")]
        public async Task<ActionResult<IEnumerable<Car>>> GetVignetteValidCars()
        {
            DateTime currentDate = DateTime.Now;

//            return await _context.Cars.Where(c => DateTime.Parse(c.CarVignette) > currentDate).ToListAsync();

            return await _context.Cars.ToListAsync().ContinueWith(cars => cars.Result.FindAll(c => DateTime.Parse(c.CarVignette) > currentDate));

        }

        // GET: api/Cars/VignetteInvalidCars
        [HttpGet("VignetteInvalidCars")]
        public async Task<ActionResult<IEnumerable<Car>>> GetVignetteInValidCars()
        {
            DateTime currentDate = DateTime.Now;

            return await _context.Cars.ToListAsync().ContinueWith(cars => cars.Result.FindAll(c => DateTime.Parse(c.CarVignette) <= currentDate));
        }

        // GET: api/Cars/InsuranceValidCars
        [HttpGet("InsuranceValidCars")]
        public async Task<ActionResult<IEnumerable<Car>>> GetInsuranceValidCars()
        {
            DateTime currentDate = DateTime.Now;

            return await _context.Cars.ToListAsync().ContinueWith(cars => cars.Result.FindAll(c => DateTime.Parse(c.CarInsurance) > currentDate));

        }

        // GET: api/Cars/InsuranceInvalidCars
        [HttpGet("InsuranceInvalidCars")]
        public async Task<ActionResult<IEnumerable<Car>>> GetInsuranceInValidCars()
        {
            DateTime currentDate = DateTime.Now;

            return await _context.Cars.ToListAsync().ContinueWith(cars => cars.Result.FindAll(c => DateTime.Parse(c.CarInsurance) <= currentDate));
        }

        // GET: api/Cars/InspectionValidCars
        [HttpGet("InspectionValidCars")]
        public async Task<ActionResult<IEnumerable<Car>>> GetInspectionValidCars()
        {
            DateTime currentDate = DateTime.Now;

            return await _context.Cars.ToListAsync().ContinueWith(cars => cars.Result.FindAll(c => DateTime.Parse(c.CarPeriodicRevision) > currentDate));
        }

        // GET: api/Cars/InspectionInvalidCars
        [HttpGet("InspectionInvalidCars")]
        public async Task<ActionResult<IEnumerable<Car>>> GetInspectionInValidCars()
        {
            DateTime currentDate = DateTime.Now;

            return await _context.Cars.ToListAsync().ContinueWith(cars => cars.Result.FindAll(c => DateTime.Parse(c.CarPeriodicRevision) <= currentDate));
        }

        // GET: api/Cars/{id}
        [HttpGet("{id}")]
        public async Task<ActionResult<Car>> GetCar(int id)
        {
            var car = await _context.Cars.FindAsync(id);

            if (car == null)
            {
                return NotFound();
            }

            return car;
        }

        // POST: api/Cars
        [HttpPost]
        public async Task<ActionResult<Car>> PostCar(Car car)
        {
            _context.Cars.Add(car);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCar", new { id = car.CarID }, car);
        }

        // PUT: api/Cars/{id}
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCar(int id, Car car)
        {
            if (id != car.CarID)
            {
                return BadRequest();
            }

            _context.Entry(car).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CarExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }


        // DELETE: api/Cars/{id}
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCar(int id)
        {
            var car = await _context.Cars.FindAsync(id);
            if (car == null)
            {
                return NotFound();
            }

            _context.Cars.Remove(car);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool CarExists(int id)
        {
            return _context.Cars.Any(e => e.CarID == id);
        }
    }
}
