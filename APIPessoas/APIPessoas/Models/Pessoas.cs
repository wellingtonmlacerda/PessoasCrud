using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace APIPessoas.Models
{
    [Table("Pessoas")]
    public class Pessoas
    {
        [Key]
        public int ID { get; set; }
        [MaxLength(30)]
        public string NOME { get; set; }
        [MaxLength(30)]
        public string SOBRENOME { get; set; }
        public string CPF { get; set; }
        public string NACIONALIDADE { get; set; }
        public string CEP { get; set; }
        public string ESTADO { get; set; }
        public string CIDADE { get; set; }
        public string LOGRADOURO { get; set; }
        public string EMAIL { get; set; }
        public string TELEFONE { get; set; }
    }
}