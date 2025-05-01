using System.ComponentModel.DataAnnotations;

namespace WithYouDataBaseEntity.Models
{
    public class Payment : BaseEntity 
    {
        public int ID { get; set; }
        [Required]
        public double  Amount    { get; set; }
        [Required]
        public DateTime Date { get; set; }
        [Required]
        public string Method { get; set; }
        [Required]
        public string Stutes { get; set; }

        public int UserID { get; set; }
        public User User { get; set; }





    }
}
