using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using WithYouDataBaseEntity.Models;

namespace WithYouDataBaseEntity.Data
{
    public class ApplicationDbContext : IdentityDbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
            
        }





        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // Configure Articel - Psychologist relationship
            modelBuilder.Entity<Articel>()
                .HasOne(a => a.Psychologist)
                .WithMany(p => p.Articels)
                .HasForeignKey(a => a.Psychologist_id)
                .OnDelete(DeleteBehavior.Restrict); // Prevents cascade delete conflicts

            // Configure Articel - Admin relationship
            modelBuilder.Entity<Articel>()
                .HasOne(a => a.Admin)
                .WithMany(a => a.Articels)
                .HasForeignKey(a => a.Admin_ID)
                .OnDelete(DeleteBehavior.Restrict); // Prevents cascade delete conflicts

            // Configure other relationships as needed
            // Configure Problem - Psychologist relationship (has naming inconsistency)
            modelBuilder.Entity<Problem>()
                .HasOne(p => p.psychologist)
                .WithMany(p => p.Problems)
                .HasForeignKey(p => p.Psychologist)
                .OnDelete(DeleteBehavior.Restrict);

            // Configure Message relationships
            modelBuilder.Entity<Message>()
                .HasOne(m => m.User)
                .WithMany(u => u.Messages)
                .HasForeignKey(m => m.User_ID)
                .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<Message>()
                .HasOne(m => m.Psychologist)
                .WithMany(p => p.Messages)
                .HasForeignKey(m => m.Pshycologest_ID)  // Note: There's a typo in your property name
                .OnDelete(DeleteBehavior.Restrict);

            // Configure Review relationships
            modelBuilder.Entity<Review>()
                .HasOne(r => r.User)
                .WithMany(u => u.Review)
                .HasForeignKey(r => r.User_ID)
                .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<Review>()
                .HasOne(r => r.Psychologist)
                .WithMany(p => p.Reviews)
                .HasForeignKey(r => r.Pshycologest_ID)  // Note: There's a typo in your property name
                .OnDelete(DeleteBehavior.Restrict);

            // Configure Session relationships
            modelBuilder.Entity<Session>()
                .HasOne(s => s.User)
                .WithMany(u => u.Sessions)
                .HasForeignKey(s => s.User_ID)
                .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<Session>()
                .HasOne(s => s.Psychologist)
                .WithMany(p => p.Sessions)
                .HasForeignKey(s => s.Psychologist_ID)
                .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<Session>()
                .HasOne(s => s.Payment)
                .WithMany()  // Payment doesn't have a navigation property back to Session
                .HasForeignKey(s => s.Payment_ID)
                .OnDelete(DeleteBehavior.Restrict);
        }








        public DbSet<Admin> Admins { get; set; }
        public new DbSet<User> Users { get; set; }
        public DbSet<Message> Messages { get; set; }
        public DbSet<Payment> Payments { get; set; }
        public DbSet<Problem> Problems { get; set; }
        public DbSet<Psychologist> Psychologists { get; set; }
        public DbSet<Review> Reviews { get; set; }
        public DbSet<Session> Sessions { get; set; }
        public DbSet<Articel> Articels { get; set; }
      

    }
}
