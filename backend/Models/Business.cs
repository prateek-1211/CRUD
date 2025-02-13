using System.ComponentModel.DataAnnotations;

public class Business
{
    [Key]  // ✅ Primary Key
    public int BusinessID { get; set; }

    [Required]  // ✅ Name field required hai
    [StringLength(255)]
    public string Name { get; set; } = string.Empty;

    public string Address { get; set; } = string.Empty;
    public string City { get; set; } = string.Empty;
    public string State { get; set; } = string.Empty;
    public string ZipCode { get; set; } = string.Empty;
    public string PhoneNumber { get; set; } = string.Empty;
    public string Category { get; set; } = string.Empty;
    public string Website { get; set; } = string.Empty;

    [Range(0, 5)]  // ✅ Rating range validation
    public decimal Rating { get; set; }
}
