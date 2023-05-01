using BusRoute.Data.UnitOfWork;
using BusRoute.Models.Entities;
using BusRoute.Services.Interfaces;
using Microsoft.EntityFrameworkCore;


namespace BusRoute.Services.Implementations
{
    public class BusLineService : IBusLineService
    {
        private readonly IUnitOfWork _unitOfWork;

        public BusLineService(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        public async Task<BusLine> GetByIdAsync(int id)
        {
            var busline = await _unitOfWork.BusLineRepository
                                                         .GetById(a => a.BusRouteId == id)
                                                         .FirstOrDefaultAsync();
            return busline;
        }
    }
}