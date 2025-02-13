using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

[Route("api/[controller]")]
[ApiController]
public class BusinessController : ControllerBase
{
    private readonly ApplicationDbContext _context;

    public BusinessController(ApplicationDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<Business>>> GetBusinesses()
    {
        return await _context.Businesses.ToListAsync();
    }

    [HttpPost("create")]
    public async Task<ActionResult<Business>> CreateBusiness(Business business)
    {
        _context.Businesses.Add(business);
        await _context.SaveChangesAsync();

        return CreatedAtRoute("GetBusinessById", new { id = business.BusinessID }, business);
    }

    [HttpGet("{id}", Name = "GetBusinessById")]
    public async Task<ActionResult<Business>> GetBusinessById(int id)
    {
        var business = await _context.Businesses.FindAsync(id);
        if (business == null) return NotFound();
        return business;
    }

    [HttpPut("{id}")]
public async Task<IActionResult> UpdateBusiness(int id, Business business)
{
    if (id != business.BusinessID) return BadRequest();

    _context.Entry(business).State = EntityState.Modified;
    await _context.SaveChangesAsync();
    return NoContent();
}

[HttpDelete("{id}")]
public async Task<IActionResult> DeleteBusiness(int id)
{
    var business = await _context.Businesses.FindAsync(id);
    if (business == null) return NotFound();

    _context.Businesses.Remove(business);
    await _context.SaveChangesAsync();
    return NoContent();
}

[HttpGet("search/{query}")]
public async Task<ActionResult<IEnumerable<Business>>> SearchBusinesses(string query)
{
    var result = await _context.Businesses
        .Where(b => b.Name.Contains(query) || b.Category.Contains(query))
        .ToListAsync();
    
    return Ok(result);
}

}