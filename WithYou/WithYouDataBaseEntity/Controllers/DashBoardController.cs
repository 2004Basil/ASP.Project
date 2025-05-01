using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.VisualBasic;
using WithYouDataBaseEntity.Data;
using WithYouDataBaseEntity.Models;
using WithYouDataBaseEntity.ModelView;


namespace WithYouDataBaseEntity.Controllers
{
    public class DashBoardController : Controller
    {

        private readonly ApplicationDbContext DataBase;

        public DashBoardController(ApplicationDbContext context)
        {
            DataBase = context;
        }


        public async Task<IActionResult> Index()
        {
            var dashboardViewModel = new DashboardViewModel
            {
                // Admin information
                Admins = DataBase.Admins,

                // Payment statistics
                TotalPayments = await DataBase.Payments.SumAsync(m => m.Amount),

                // User statistics
                TotalUsers = await DataBase.Users.CountAsync(),
                NewUsersToday = await DataBase.Users.Where(a => a.CreatedAt.Date == DateTime.Now.Date).CountAsync(),

                // Session statistics
                BookedSessions = await DataBase.Sessions.Where(s => s.Stute == "محجوزة").CountAsync(),
                CanceledSessions = await DataBase.Sessions.Where(s => s.Stute == "ملغية").CountAsync(),
                CompletedSessions = await DataBase.Sessions.Where(s => s.Stute == "مكتملة").CountAsync(),
                RecentSessions = DataBase.Sessions.OrderByDescending(s => s.ID).Take(5).ToList()
            };

            // Last booked session
            if (DataBase.Sessions.Any())
            {
                dashboardViewModel.LastBookedSession = await DataBase.Sessions.OrderDescending().FirstOrDefaultAsync();
            }

            // Last submitted problem
            if (DataBase.Problems.Any())
            {
                dashboardViewModel.LastProblem = await DataBase.Problems.OrderDescending().FirstOrDefaultAsync();
            }

            // Last review
            if (DataBase.Reviews.Any())
            {
                dashboardViewModel.LastReview = await DataBase.Reviews.OrderDescending().FirstOrDefaultAsync();
            }

            // Last payment
            if (DataBase.Payments.Any())
            {
                dashboardViewModel.LastPayment = await DataBase.Payments.OrderDescending().FirstOrDefaultAsync();
            }

            return View(dashboardViewModel);
        }
    }
}
