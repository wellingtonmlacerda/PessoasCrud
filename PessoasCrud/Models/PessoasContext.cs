using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace PessoasCrud.Models
{
    public class PessoasContext:DbContext
    {
        public DbSet<Pessoas> Pessoas { get; set; }

    }
}