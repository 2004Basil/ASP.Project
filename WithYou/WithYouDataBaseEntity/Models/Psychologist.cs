using System.ComponentModel.DataAnnotations;
using System.Runtime.CompilerServices;

namespace WithYouDataBaseEntity.Models
{
    public class Psychologist : BaseEntity
    {
        public int ID { get; set; }
        [Required]
        public string FirstName { get; set; }
        [Required]
        public string LastName { get; set; }
        [Required]
        [EmailAddress]
        public string Email { get; set; }
        [Required]
        [DataType(DataType.Password)]
        public string Password { get; set; }
        [Required]
        public string  Certifcates { get; set; }
        [Required]
        public string Specialization { get; set; }
        [Required]
        public int ExperinceYears { get; set; }

        public List<Session> Sessions { get; set; }
        public List<Articel> Articels { get; set; }
        public List<Review> Reviews { get; set; }
        public List<Problem> Problems { get; set; }
        public List<Message> Messages { get; set; }




    }
}
