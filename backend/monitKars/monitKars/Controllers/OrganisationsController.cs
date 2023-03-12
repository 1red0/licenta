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
    public class OrganisationsController : ControllerBase
    {
        private readonly DataContext _context;

        public OrganisationsController(DataContext context)
        {
            _context = context;
        }

        // GET: api/Organisations
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Organisation>>> GetOrganisations()
        {
            return await _context.Organisations.ToListAsync();
        }

        // GET: api/Organisations/1
        [HttpGet("{id}")]
        public async Task<ActionResult<Organisation>> GetOrganisation(int id)
        {
            var organisation = await _context.Organisations.FindAsync(id);

            if (organisation == null)
            {
                return NotFound();
            }

            return organisation;
        }

        // GET: api/Organisations/name/TestOrg
        [HttpGet("name/{orgName}")]
        public async Task<ActionResult<IEnumerable<Organisation>>> GetOrganisationName(string orgName)
        {
            return await _context.Organisations.Where(m => m.OrganisationName == orgName).ToListAsync();
        }

        // PUT: api/Organisations/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutOrganisation(int id, Organisation organisation)
        {
            if (id != organisation.OrganisationID)
            {
                return BadRequest();
            }

            _context.Entry(organisation).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!OrganisationExists(id))
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

        // POST: api/Organisations
        [HttpPost]
        public async Task<ActionResult<Organisation>> PostOrganisation(Organisation organisation)
        {
            _context.Organisations.Add(organisation);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetOrganisation", new { id = organisation.OrganisationID }, organisation);
        }

        // DELETE: api/Organisations/1
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteOrganisation(int id)
        {
            var organisation = await _context.Organisations.FindAsync(id);
            if (organisation == null)
            {
                return NotFound();
            }

            _context.Organisations.Remove(organisation);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool OrganisationExists(int id)
        {
            return _context.Organisations.Any(e => e.OrganisationID == id);
        }
    }
}
