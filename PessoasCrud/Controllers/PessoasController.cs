using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using PessoasCrud.Models;

namespace PessoasCrud.Controllers
{
    public class PessoasController : ApiController
    {
        private PessoasContext db = new PessoasContext();

        // GET: api/Pessoas
        public IQueryable<Pessoas> GetPessoas()
        {
            return db.Pessoas;
        }

        // GET: api/Pessoas/5
        [ResponseType(typeof(Pessoas))]
        public IHttpActionResult GetPessoas(int id)
        {
            Pessoas pessoas = db.Pessoas.Find(id);
            if (pessoas == null)
            {
                return NotFound();
            }

            return Ok(pessoas);
        }

        // PUT: api/Pessoas/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutPessoas(int id, Pessoas pessoas)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != pessoas.ID)
            {
                return BadRequest();
            }

            db.Entry(pessoas).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PessoasExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Pessoas
        [ResponseType(typeof(Pessoas))]
        public IHttpActionResult PostPessoas(Pessoas pessoas)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Pessoas.Add(pessoas);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = pessoas.ID }, pessoas);
        }

        // DELETE: api/Pessoas/5
        [ResponseType(typeof(Pessoas))]
        public IHttpActionResult DeletePessoas(int id)
        {
            Pessoas pessoas = db.Pessoas.Find(id);
            if (pessoas == null)
            {
                return NotFound();
            }

            db.Pessoas.Remove(pessoas);
            db.SaveChanges();

            return Ok(pessoas);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool PessoasExists(int id)
        {
            return db.Pessoas.Count(e => e.ID == id) > 0;
        }
    }
}