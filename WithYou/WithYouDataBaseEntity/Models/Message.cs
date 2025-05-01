using System.ComponentModel.DataAnnotations;
using System.Reflection.Metadata.Ecma335;

namespace WithYouDataBaseEntity.Models
{
    public class Message : BaseEntity
    {
        public int Id { get; set; }
        [Required]
        public string Content { get; set; }
        [Required]
        public DateTime TimeStamp { get; set; }

        public int User_ID { get; set; }
        public User User { get; set; }

        public int Pshycologest_ID { get; set; }
        public Psychologist Psychologist { get; set; }
    }
}
