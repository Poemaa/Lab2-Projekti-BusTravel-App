using BusRoute.Data.UnitOfWork;
using BusRoute.Models.Entities;
using BusRoute.Services.Interfaces;
using Microsoft.EntityFrameworkCore;
using BusRoute.Models.DTOs;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Identity;
using Microsoft.CodeAnalysis;

namespace BusRoute.services.Implementations
{
    public class BusLineService : IBusLineService
    {
        private readonly IUnitOfWork _unitOfWork;

        public BusLineService(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        public async Task<List<BusLineDTO>> GetAllBusLines()
        {
            return await _unitOfWork.BusLineRepository.GetAll().Select(c => new BusLineDTO
            {
                Id=c.Id,
                DepartureCityId = c.DepartureCityId,
                ArrivalCityId = c.ArrivalCityId,
                BusItineraries = c.BusItineraries,
                CompanyId = c.CompanyId,
                NumberOfSeats = c.NumberOfSeats,
                Price =c.Price


            }).ToListAsync();
        }
        public async Task<BusLineDTO> GetByIdAsync(int id)
        {
            var busLine = await _unitOfWork.BusLineRepository
                                                         .GetById(a => a.Id == id)
                                                         .FirstOrDefaultAsync();
            BusLineDTO busline = new BusLineDTO
            {
                Id= busLine.Id,
                DepartureCityId = busLine.DepartureCityId,
                ArrivalCityId = busLine.ArrivalCityId,
                BusItineraries = busLine.BusItineraries,
                CompanyId = busLine.CompanyId,
                NumberOfSeats = busLine.NumberOfSeats,
                Price = busLine.Price
            };
            return busline;
        }

        public async Task<bool> AddBusLine(BusLineDTO busLineDto)
        {
            BusLine busLine = new BusLine
            {
                DepartureCityId = busLineDto.DepartureCityId,
                ArrivalCityId = busLineDto.ArrivalCityId,
                BusItineraries = busLineDto.BusItineraries,
                CompanyId = busLineDto.CompanyId,
                NumberOfSeats = busLineDto.NumberOfSeats,
                Price = busLineDto.Price
            };
            await _unitOfWork.BusLineRepository.CreateAsync(busLine);
            return await _unitOfWork.CompleteAsync();
        }
        public async Task<bool> DeleteBusLine(int busLineId)
        {
            var busLine = await _unitOfWork.BusLineRepository.GetById(a => a.Id == busLineId).FirstOrDefaultAsync();
            _unitOfWork.BusLineRepository.Delete(busLine ?? throw new InvalidOperationException());
            return await _unitOfWork.CompleteAsync();
        }

        public async Task<bool> EditBusLine(BusLineDTO busLineDto)
        {
            BusLine busLine = new BusLine
            {
                Id = busLineDto.Id,
                DepartureCityId = busLineDto.DepartureCityId,
                ArrivalCityId = busLineDto.ArrivalCityId,
                BusItineraries = busLineDto.BusItineraries,
                CompanyId = busLineDto.CompanyId,
                NumberOfSeats = busLineDto.NumberOfSeats,
                Price = busLineDto.Price
            };
            _unitOfWork.BusLineRepository.Update(busLine);
            return await _unitOfWork.CompleteAsync();
        }


    }
}