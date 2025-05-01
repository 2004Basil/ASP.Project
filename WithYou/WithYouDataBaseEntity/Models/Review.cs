using Microsoft.EntityFrameworkCore.Metadata.Conventions;
using System.ComponentModel.DataAnnotations;

namespace WithYouDataBaseEntity.Models
{
    public class Review : BaseEntity
    {
        public int ID { get; set; }
        [Required]
        public string Comment { get; set; }
        [Required]
        public DateTime ReviewDate { get; set; }
       
        public int? Rating  { get; set; }

        public int User_ID { get; set; }
        public User User { get; set; }

        public int Pshycologest_ID { get; set; }
        public Psychologist Psychologist { get; set; }
    }
}
