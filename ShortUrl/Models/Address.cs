using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ShortUrl.Models
{
    public class Address
    {
        public static readonly byte ShortUrlLength = 6;

        public Address()
        {

        }

        public Address(string longUrl)
        {
            LongUrl = longUrl;
            Created = DateTime.Now;
            ShortUrl = GenerateShortUrl(longUrl);
        }
        public int Id { get; private set; }
        public string LongUrl { get; private set; }
        public string ShortUrl { get; private set; }
        public DateTime Created { get; private set; }
        public int FollowCount { get; private set; }

        public void Update(string longUrl)
        {
            if (string.IsNullOrWhiteSpace(longUrl) || longUrl == LongUrl)
            {
                return;
            }
            LongUrl = longUrl;
            ShortUrl = GenerateShortUrl(longUrl);
            FollowCount += 1;
        }

        private string GenerateShortUrl(string longUrl)
        {
            var shortUri = new Uri(longUrl);
            return $"{shortUri.Scheme}://{shortUri.Host}/{GenerateRandomString(ShortUrlLength, longUrl)}";
        }
        private string GenerateRandomString(int length, string str)
        {
            var random = new Random();
            var strOnlyLetter = str.Where(x => char.IsLetter(x)).ToArray();
            var result = Enumerable
                .Repeat(new string(strOnlyLetter), length)
                .Select(s => s[random.Next(s.Length)])
                .ToArray();

            return new string(result);
        }

        public void UpdateFollowCount()
        {
            FollowCount += 1;
        }
    }
}