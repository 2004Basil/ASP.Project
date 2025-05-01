using System.ComponentModel.DataAnnotations;

namespace WithYouDataBaseEntity.Models
{
    public class Admin : BaseEntity
    {
        public int ID { get; set; }
        [Required]
        public string FirstName { get; set; }
        [Required]
        public string LastName { get; set; }
        [Required]
        public string Email { get; set; }
        [Required]
        public string Password { get; set; }
        [Required]
        public string  Role { get; set; }


        public List<Articel> Articels { get; set; }

    }
}
