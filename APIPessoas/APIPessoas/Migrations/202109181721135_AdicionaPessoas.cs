namespace APIPessoas.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AdicionaPessoas : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Pessoas",
                c => new
                    {
                        ID = c.Int(nullable: false, identity: true),
                        NOME = c.String(maxLength: 30),
                        SOBRENOME = c.String(maxLength: 30),
                        CPF = c.String(),
                        NACIONALIDADE = c.String(),
                        CEP = c.String(),
                        ESTADO = c.String(),
                        CIDADE = c.String(),
                        LOGRADOURO = c.String(),
                        EMAIL = c.String(),
                        TELEFONE = c.String(),
                    })
                .PrimaryKey(t => t.ID);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.Pessoas");
        }
    }
}
