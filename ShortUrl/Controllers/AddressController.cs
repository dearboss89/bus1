using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using ShortUrl.Services;
using ShortUrl.ViewModels;

namespace ShortUrl.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AddressController : ControllerBase
    {
        private readonly IAddressService _addressService;

        public AddressController(IAddressService addressService)
        {
          _addressService = addressService;
        }

        [HttpGet]
        public List<AddressViewDto> Get()
        {
            return _addressService.Get();
        }
        
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return _addressService.Get(id);
        }

        [HttpPost]
        public void Post(AddressCreateDto createDto)
        {
            _addressService.Create(createDto);
        }

        [HttpPut]
        public void Put(AddressUpdateDto updateDto)
        {
            _addressService.Update(updateDto);
        }
        
        [HttpPut("{id}/FollowCount")]
        public void Put(int id)
        {
            _addressService.Update(id);
        }
        
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            _addressService.Delete(id);
        }
    }
}
