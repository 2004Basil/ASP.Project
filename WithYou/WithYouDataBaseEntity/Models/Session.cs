using System.ComponentModel.DataAnnotations;

namespace WithYouDataBaseEntity.Models
{
    public class Session : BaseEntity
    {
        public int ID { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string  description { get; set; }
        [Required]
        public string  Stute { get; set; }
        [Required]
        public DateTime Date { get; set; }
        [Required]
        public TimeSpan Time { get; set; }

        public int Psychologist_ID { get; set; }

        public Psychologist Psychologist { get; set; }

        public int Payment_ID { get; set; }

        public Payment Payment { get; set; }


        public int User_ID { get; set; }

        public User User { get; set; }

    }
}
