using WithYouDataBaseEntity.Models;

namespace WithYouDataBaseEntity.ModelView
{
    public class DashboardViewModel
    {
        // Admin information
        public object Admins { get; set; }

        // Payment statistics
        public double TotalPayments { get; set; }
        public Payment LastPayment { get; set; }

        // User statistics
        public int TotalUsers { get; set; }
        public int NewUsersToday { get; set; }

        // Session statistics
        public int BookedSessions { get; set; }
        public int CanceledSessions { get; set; }
        public int CompletedSessions { get; set; }
        public Session LastBookedSession { get; set; }
        public List<Session> RecentSessions { get; set; }

        // Problem and review information
        public Problem LastProblem { get; set; }
        public Review LastReview { get; set; }
    }
}
