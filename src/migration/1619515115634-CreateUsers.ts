import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUsers1619515115634 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    return await queryRunner.createTable(new Table({
      name: 'users',
      columns: [
        { name: 'id', isGenerated: true, type: 'int', generationStrategy: 'increment', isPrimary: true },
        { name: 'username', type: 'varchar' },
        { name: 'passwordDigest', type: 'varchar' },
        { name: 'createdAt', type: 'timestamp', isNullable: false, default: 'now()' },
        { name: 'updatedAt', type: 'timestamp', isNullable: false, default: 'now()' },
      ]
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    try {
      return await queryRunner.dropTable('users')
    } catch (error) {
      console.log('报错信息++++')
    }
  }
}
