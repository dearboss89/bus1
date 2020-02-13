using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ShortUrl.ViewModels
{
    public class AddressViewDto
    {
        public int Id { get; set; }
        public string LongUrl { get; set; }
        public string ShortUrl { get; set; }
        public DateTime Created { get; set; }
        public int FollowCount { get; set; }
    }
}
