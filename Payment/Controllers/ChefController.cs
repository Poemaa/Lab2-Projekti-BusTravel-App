using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Payment.Models;
using Payment.Data;
using Payment.Models.Entities;

namespace Payment.Controllers
{
    [Route("api/chefs")]

    [ApiController]
    public class ChefController : ControllerBase
    {
        private readonly PaymentDbContext _context;

        public ChefController(PaymentDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Chef>>> GetChefs()
        {
            return await _context.Chefs.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Chef>> GetChef(int id)
        {
            var chef = await _context.Chefs.FindAsync(id);

            if (chef == null)
            {
                return NotFound();
            }

            return chef;
        }

        [HttpPost]
        public async Task<ActionResult<Chef>> PostChef(Chef chef)
        {
            _context.Chefs.Add(chef);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetChef", new { id = chef.ChefId }, chef);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutChef(int id, Chef chef)
        {
            if (id != chef.ChefId)
            {
                return BadRequest();
            }

            _context.Entry(chef).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ChefExists(id))
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

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteChef(int id)
        {
            var chef = await _context.Chefs.FindAsync(id);
            if (chef == null)
            {
                return NotFound();
            }

            _context.Chefs.Remove(chef);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ChefExists(int id)
        {
            return _context.Chefs.Any(e => e.ChefId == id);
        }
    }
}
