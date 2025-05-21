<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20250521103859 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE posts DROP FOREIGN KEY FK_885DBAFA6B92BD7B');
        $this->addSql('CREATE TABLE blocklists (id INT AUTO_INCREMENT NOT NULL, blocker_id_id INT NOT NULL, blocked_id_id INT NOT NULL, INDEX IDX_936DBDC5CC0B765F (blocker_id_id), INDEX IDX_936DBDC5C805DFAB (blocked_id_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE conversations (id INT AUTO_INCREMENT NOT NULL, user1_id INT NOT NULL, user2_id INT NOT NULL, INDEX IDX_C2521BF156AE248B (user1_id), INDEX IDX_C2521BF1441B8B65 (user2_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE `likes` (id INT AUTO_INCREMENT NOT NULL, post_id_id INT NOT NULL, user_id_id INT NOT NULL, INDEX IDX_49CA4E7DE85F12B8 (post_id_id), INDEX IDX_49CA4E7D9D86650F (user_id_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE reports (id INT AUTO_INCREMENT NOT NULL, reported_id_id INT NOT NULL, reporter_id_id INT NOT NULL, post_id_id INT NOT NULL, cause VARCHAR(255) NOT NULL, INDEX IDX_F11FA745D2BF5655 (reported_id_id), INDEX IDX_F11FA745D6B1FFA1 (reporter_id_id), INDEX IDX_F11FA745E85F12B8 (post_id_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE blocklists ADD CONSTRAINT FK_936DBDC5CC0B765F FOREIGN KEY (blocker_id_id) REFERENCES users (id)');
        $this->addSql('ALTER TABLE blocklists ADD CONSTRAINT FK_936DBDC5C805DFAB FOREIGN KEY (blocked_id_id) REFERENCES users (id)');
        $this->addSql('ALTER TABLE conversations ADD CONSTRAINT FK_C2521BF156AE248B FOREIGN KEY (user1_id) REFERENCES users (id)');
        $this->addSql('ALTER TABLE conversations ADD CONSTRAINT FK_C2521BF1441B8B65 FOREIGN KEY (user2_id) REFERENCES users (id)');
        $this->addSql('ALTER TABLE `likes` ADD CONSTRAINT FK_49CA4E7DE85F12B8 FOREIGN KEY (post_id_id) REFERENCES posts (id)');
        $this->addSql('ALTER TABLE `likes` ADD CONSTRAINT FK_49CA4E7D9D86650F FOREIGN KEY (user_id_id) REFERENCES users (id)');
        $this->addSql('ALTER TABLE reports ADD CONSTRAINT FK_F11FA745D2BF5655 FOREIGN KEY (reported_id_id) REFERENCES users (id)');
        $this->addSql('ALTER TABLE reports ADD CONSTRAINT FK_F11FA745D6B1FFA1 FOREIGN KEY (reporter_id_id) REFERENCES users (id)');
        $this->addSql('ALTER TABLE reports ADD CONSTRAINT FK_F11FA745E85F12B8 FOREIGN KEY (post_id_id) REFERENCES posts (id)');
        $this->addSql('ALTER TABLE conversation DROP FOREIGN KEY FK_8A8E26E9441B8B65');
        $this->addSql('ALTER TABLE conversation DROP FOREIGN KEY FK_8A8E26E956AE248B');
        $this->addSql('ALTER TABLE `like` DROP FOREIGN KEY FK_AC6340B39D86650F');
        $this->addSql('ALTER TABLE `like` DROP FOREIGN KEY FK_AC6340B3E85F12B8');
        $this->addSql('DROP TABLE conversation');
        $this->addSql('DROP TABLE `like`');
        $this->addSql('ALTER TABLE posts DROP FOREIGN KEY FK_885DBAFA9D86650F');
        $this->addSql('DROP INDEX IDX_885DBAFA6B92BD7B ON posts');
        $this->addSql('DROP INDEX IDX_885DBAFA9D86650F ON posts');
        $this->addSql('ALTER TABLE posts ADD user_id INT DEFAULT NULL, ADD conversation_id INT DEFAULT NULL, DROP user_id_id, DROP conversation_id_id, DROP nb_repeblication, DROP repost, DROP like_post');
        $this->addSql('ALTER TABLE posts ADD CONSTRAINT FK_885DBAFAA76ED395 FOREIGN KEY (user_id) REFERENCES users (id)');
        $this->addSql('ALTER TABLE posts ADD CONSTRAINT FK_885DBAFA9AC0396 FOREIGN KEY (conversation_id) REFERENCES conversations (id)');
        $this->addSql('CREATE INDEX IDX_885DBAFAA76ED395 ON posts (user_id)');
        $this->addSql('CREATE INDEX IDX_885DBAFA9AC0396 ON posts (conversation_id)');
        $this->addSql('ALTER TABLE users ADD suspended TINYINT(1) NOT NULL, ADD image VARCHAR(255) DEFAULT NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE posts DROP FOREIGN KEY FK_885DBAFA9AC0396');
        $this->addSql('CREATE TABLE conversation (id INT AUTO_INCREMENT NOT NULL, user1_id INT NOT NULL, user2_id INT NOT NULL, INDEX IDX_8A8E26E9441B8B65 (user2_id), INDEX IDX_8A8E26E956AE248B (user1_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE `like` (id INT AUTO_INCREMENT NOT NULL, post_id_id INT NOT NULL, user_id_id INT NOT NULL, INDEX IDX_AC6340B3E85F12B8 (post_id_id), INDEX IDX_AC6340B39D86650F (user_id_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('ALTER TABLE conversation ADD CONSTRAINT FK_8A8E26E9441B8B65 FOREIGN KEY (user2_id) REFERENCES users (id)');
        $this->addSql('ALTER TABLE conversation ADD CONSTRAINT FK_8A8E26E956AE248B FOREIGN KEY (user1_id) REFERENCES users (id)');
        $this->addSql('ALTER TABLE `like` ADD CONSTRAINT FK_AC6340B39D86650F FOREIGN KEY (user_id_id) REFERENCES users (id)');
        $this->addSql('ALTER TABLE `like` ADD CONSTRAINT FK_AC6340B3E85F12B8 FOREIGN KEY (post_id_id) REFERENCES posts (id)');
        $this->addSql('ALTER TABLE blocklists DROP FOREIGN KEY FK_936DBDC5CC0B765F');
        $this->addSql('ALTER TABLE blocklists DROP FOREIGN KEY FK_936DBDC5C805DFAB');
        $this->addSql('ALTER TABLE conversations DROP FOREIGN KEY FK_C2521BF156AE248B');
        $this->addSql('ALTER TABLE conversations DROP FOREIGN KEY FK_C2521BF1441B8B65');
        $this->addSql('ALTER TABLE `likes` DROP FOREIGN KEY FK_49CA4E7DE85F12B8');
        $this->addSql('ALTER TABLE `likes` DROP FOREIGN KEY FK_49CA4E7D9D86650F');
        $this->addSql('ALTER TABLE reports DROP FOREIGN KEY FK_F11FA745D2BF5655');
        $this->addSql('ALTER TABLE reports DROP FOREIGN KEY FK_F11FA745D6B1FFA1');
        $this->addSql('ALTER TABLE reports DROP FOREIGN KEY FK_F11FA745E85F12B8');
        $this->addSql('DROP TABLE blocklists');
        $this->addSql('DROP TABLE conversations');
        $this->addSql('DROP TABLE `likes`');
        $this->addSql('DROP TABLE reports');
        $this->addSql('ALTER TABLE posts DROP FOREIGN KEY FK_885DBAFAA76ED395');
        $this->addSql('DROP INDEX IDX_885DBAFAA76ED395 ON posts');
        $this->addSql('DROP INDEX IDX_885DBAFA9AC0396 ON posts');
        $this->addSql('ALTER TABLE posts ADD user_id_id INT DEFAULT NULL, ADD conversation_id_id INT DEFAULT NULL, ADD nb_repeblication INT NOT NULL, ADD repost TINYINT(1) NOT NULL, ADD like_post TINYINT(1) NOT NULL, DROP user_id, DROP conversation_id');
        $this->addSql('ALTER TABLE posts ADD CONSTRAINT FK_885DBAFA6B92BD7B FOREIGN KEY (conversation_id_id) REFERENCES conversation (id)');
        $this->addSql('ALTER TABLE posts ADD CONSTRAINT FK_885DBAFA9D86650F FOREIGN KEY (user_id_id) REFERENCES users (id)');
        $this->addSql('CREATE INDEX IDX_885DBAFA6B92BD7B ON posts (conversation_id_id)');
        $this->addSql('CREATE INDEX IDX_885DBAFA9D86650F ON posts (user_id_id)');
        $this->addSql('ALTER TABLE users DROP suspended, DROP image');
    }
}
