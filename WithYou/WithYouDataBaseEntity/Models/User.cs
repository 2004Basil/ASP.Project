using System.ComponentModel.DataAnnotations;

namespace WithYouDataBaseEntity.Models
{
    public class User : BaseEntity
    {
        public int ID { get; set; }
        [Required]
        public string FirstName { get; set; }
        [Required]
        public string   LastName { get; set; }
        [Required]
        [EmailAddress]
        public string Email { get; set; }
        [Required]
        [DataType(DataType.Password)]
        public string Password { get; set; }
        [Required]
        public string PhoneNumber { get; set; }
        [Required]

        public string Gender { get; set; }
        [Required]
        public DateTime DateOfBerth { get; set; }

        public List<Review> Review { get; set; }

        public List<Problem> problems { get; set; }
        public List<Message> Messages { get; set; }

        public List<Session> Sessions { get; set; }

        public List<Payment> Payments { get; set; }


    }
}
