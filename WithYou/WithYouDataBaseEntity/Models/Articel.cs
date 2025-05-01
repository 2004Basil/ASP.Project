using System.ComponentModel.DataAnnotations;
using System.Reflection.Metadata.Ecma335;

namespace WithYouDataBaseEntity.Models
{
    public class Articel : BaseEntity
    {
        public int ID { get; set; }
        [Required]
        public string  Title { get; set; }
        [Required]
        public string Content { get; set; }
        [Required]
        public DateTime PublishDate { get; set; }

        public int Psychologist_id { get; set; }
        public Psychologist? Psychologist { get; set; }


        public int Admin_ID { get; set; }
        public Admin? Admin { get; set; }
    }
}
