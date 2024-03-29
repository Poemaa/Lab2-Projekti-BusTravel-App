﻿using BusRoute.Data.Repository.Models.Interfaces;


namespace BusRoute.Data.UnitOfWork
{
    public interface IUnitOfWork : IDisposable
    {
        IBusLineRepository BusLineRepository { get; }
        ILocationRepository LocationRepository { get; }
        ICompanyRepository CompanyRepository { get; }
        IBusItineraryRepository BusItineraryRepository { get; }


        Task<bool> CompleteAsync();
        bool Complete();

          
        
    }

}
