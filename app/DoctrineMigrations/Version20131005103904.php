<?php

namespace Application\Migrations;

use Doctrine\DBAL\Migrations\AbstractMigration;
use Doctrine\DBAL\Schema\Schema;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
class Version20131005103904 extends AbstractMigration
{
    public function up(Schema $schema)
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() != "mysql", "Migration can only be executed safely on 'mysql'.");

        $this->addSql("CREATE TABLE client (id INT AUTO_INCREMENT NOT NULL, random_id VARCHAR(255) NOT NULL, redirect_uris LONGTEXT NOT NULL COMMENT '(DC2Type:array)', secret VARCHAR(255) NOT NULL, allowed_grant_types LONGTEXT NOT NULL COMMENT '(DC2Type:array)', name VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB");
        $this->addSql("CREATE TABLE refresh_token (id INT AUTO_INCREMENT NOT NULL, client_id INT NOT NULL, user_id INT DEFAULT NULL, token VARCHAR(255) NOT NULL, expires_at INT DEFAULT NULL, scope VARCHAR(255) DEFAULT NULL, UNIQUE INDEX UNIQ_7142379E5F37A13B (token), INDEX IDX_7142379E19EB6921 (client_id), INDEX IDX_7142379EA76ED395 (user_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB");
        $this->addSql("CREATE TABLE access_token (id INT AUTO_INCREMENT NOT NULL, client_id INT NOT NULL, user_id INT DEFAULT NULL, token VARCHAR(255) NOT NULL, expires_at INT DEFAULT NULL, scope VARCHAR(255) DEFAULT NULL, UNIQUE INDEX UNIQ_B39617F55F37A13B (token), INDEX IDX_B39617F519EB6921 (client_id), INDEX IDX_B39617F5A76ED395 (user_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB");
        $this->addSql("CREATE TABLE auth_code (id INT AUTO_INCREMENT NOT NULL, client_id INT NOT NULL, user_id INT DEFAULT NULL, token VARCHAR(255) NOT NULL, redirect_uri LONGTEXT NOT NULL, expires_at INT DEFAULT NULL, scope VARCHAR(255) DEFAULT NULL, UNIQUE INDEX UNIQ_F1D7D1775F37A13B (token), INDEX IDX_F1D7D17719EB6921 (client_id), INDEX IDX_F1D7D177A76ED395 (user_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB");
        $this->addSql("ALTER TABLE refresh_token ADD CONSTRAINT FK_7142379E19EB6921 FOREIGN KEY (client_id) REFERENCES Client (id)");
        $this->addSql("ALTER TABLE refresh_token ADD CONSTRAINT FK_7142379EA76ED395 FOREIGN KEY (user_id) REFERENCES fos_user (id)");
        $this->addSql("ALTER TABLE access_token ADD CONSTRAINT FK_B39617F519EB6921 FOREIGN KEY (client_id) REFERENCES Client (id)");
        $this->addSql("ALTER TABLE access_token ADD CONSTRAINT FK_B39617F5A76ED395 FOREIGN KEY (user_id) REFERENCES fos_user (id)");
        $this->addSql("ALTER TABLE auth_code ADD CONSTRAINT FK_F1D7D17719EB6921 FOREIGN KEY (client_id) REFERENCES Client (id)");
        $this->addSql("ALTER TABLE auth_code ADD CONSTRAINT FK_F1D7D177A76ED395 FOREIGN KEY (user_id) REFERENCES fos_user (id)");
    }

    public function down(Schema $schema)
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() != "mysql", "Migration can only be executed safely on 'mysql'.");

        $this->addSql("ALTER TABLE refresh_token DROP FOREIGN KEY FK_7142379E19EB6921");
        $this->addSql("ALTER TABLE access_token DROP FOREIGN KEY FK_B39617F519EB6921");
        $this->addSql("ALTER TABLE auth_code DROP FOREIGN KEY FK_F1D7D17719EB6921");
        $this->addSql("DROP TABLE client");
        $this->addSql("DROP TABLE refresh_token");
        $this->addSql("DROP TABLE access_token");
        $this->addSql("DROP TABLE auth_code");
    }
}
