﻿using BusRoute.Models.DTOs;
using BusRoute.Models.Entities;
using Microsoft.AspNetCore.Mvc;

namespace BusRoute.Services.Interfaces
{
    public interface IBusLineService
    {
        Task<List<BusLineDTO>> GetAllBusLines();
        Task<BusLineDTO> GetByIdAsync(int id);
        Task<bool> AddBusLine(BusLineDTO busLineDto);
        Task<bool> DeleteBusLine(int busLineId);
        Task<bool> EditBusLine(BusLineDTO busLineDto);
    }
}
