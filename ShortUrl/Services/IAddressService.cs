using ShortUrl.ViewModels;
using System.Collections.Generic;

namespace ShortUrl.Services
{
    /// <summary>
    /// Сервис адресов
    /// </summary>
    public interface IAddressService
    {
        /// <summary>
        /// Вернет список адресов
        /// </summary>
        /// <returns></returns>
        List<AddressViewDto> Get();

        /// <summary>
        /// Вернет адрес
        /// </summary>
        /// <param name="id">идентификатор адреса</param>
        /// <returns></returns>
        string Get(int id);

        /// <summary>
        /// Создаст адрес
        /// </summary>
        /// <param name="createDto"><see cref="AddressCreateDto"/></param>
        void Create(AddressCreateDto createDto);

        /// <summary>
        /// Обновит адрес
        /// </summary>
        /// <param name="updateDto"><see cref="AddressUpdateDto"/></param>
        void Update(AddressUpdateDto updateDto);

        /// <summary>
        /// Обновит адрес
        /// </summary>
        /// <param name="id">идентификатор адреса</param>
        void Update(int id);

        /// <summary>
        /// Удалит адрес
        /// </summary>
        /// <param name="id">идентификатор адреса</param>
        void Delete(int id);
    }
}
