namespace WithYouDataBaseEntity.Models
{
    public class BaseEntity
    {
        public string CreatedBy { get; set; }
        public DateTime CreatedAt { get; set; }
        public string UpdatedBy { get; set; }
        public DateTime UpdatedAt { get; set; }

        public bool ISDeleted { get; set; }

    }
}
