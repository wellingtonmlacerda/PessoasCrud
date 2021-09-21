using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace APIPessoas.Models
{
    public class PessoasContexto: DbContext
    {
        public DbSet<Pessoas> Pessoas { get; set; }
    }
}