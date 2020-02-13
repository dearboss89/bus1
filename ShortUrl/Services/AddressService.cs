using ShortUrl.Models;
using ShortUrl.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;

namespace ShortUrl.Services
{
    public class AddressService : IAddressService
    {
        private readonly BusContext _busContext;

        public AddressService(BusContext busContext)
        {
            _busContext = busContext;
        }

        public void Create(AddressCreateDto createDto)
        {
            var address = _busContext.Addresses.FirstOrDefault(x => x.LongUrl == createDto.LongUrl);
            if (address != null) return;

            _busContext.Addresses.Add(new Address(createDto.LongUrl));
            _busContext.SaveChanges();
        }

        public void Delete(int id)
        {
            var address = _busContext.Addresses.Find(id);
            if (address == null)
            {
                throw new InvalidOperationException($"Запись с идентификатором-{id} не найдена");
            }

            _busContext.Addresses.Remove(address);
            _busContext.SaveChanges();
        }

        public List<AddressViewDto> Get()
        {
            return _busContext.Addresses.Select(x => new AddressViewDto
            {
                Id = x.Id,
                Created = x.Created,
                FollowCount = x.FollowCount,
                LongUrl = x.LongUrl,
                ShortUrl = x.ShortUrl
            }).ToList();
        }

        public string Get(int id)
        {
            var address = _busContext.Addresses.Find(id);
            if (address == null)
            {
                throw new InvalidOperationException($"Запись с идентификатором-{id} не найдена");
            }

            return address.LongUrl;
        }

        public void Update(AddressUpdateDto updateDto)
        {
            var address = _busContext.Addresses.Find(updateDto.Id);
            if (address == null)
            {
                throw new InvalidOperationException($"Запись с идентификатором-{updateDto.Id} не найдена");
            }

            address.Update(updateDto.LongUrl);
            _busContext.SaveChanges();
        }

        public void Update(int id)
        {
            var address = _busContext.Addresses.Find(id);
            if (address == null)
            {
                throw new InvalidOperationException($"Запись с идентификатором-{id} не найдена");
            }
            address.UpdateFollowCount();
            _busContext.SaveChanges();
        }
    }
}
