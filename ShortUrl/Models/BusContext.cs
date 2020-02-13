using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using MySql.Data.MySqlClient;

namespace ShortUrl.Models
{
    public class BusContext : DbContext
    {
        public BusContext(DbContextOptions options) : base(options)
        {
        }
        public DbSet<Address> Addresses { get; set; }
    }
}
