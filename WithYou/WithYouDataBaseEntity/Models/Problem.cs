using System.ComponentModel.DataAnnotations;
using System.Reflection.Metadata.Ecma335;

namespace WithYouDataBaseEntity.Models
{
    public class Problem : BaseEntity
    {
        public int ID { get; set; }
        [Required]
        public string descrption { get; set; }
        [Required]
        public string  Type { get; set; }
        [Required]
        public DateTime Diagnosis_date { get; set; }

        public int Psychologist { get; set; }
        public Psychologist psychologist { get; set; }

        public int User_ID { get; set; }
        public User User { get; set; }
    }
}
