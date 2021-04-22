import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreatePost1619078010088 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    // UP 升级
    return await  queryRunner.createTable(new Table({
      name: 'posts',
      columns: [
        {
          name: 'id',
          type: 'int',
          isGenerated: true,
          generationStrategy: 'increment',
        },
        {
          name: 'title',
          type: 'varchar',
        },
        {
          name: 'content',
          type: 'text',
        }
      ],
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // down 降级
    return await queryRunner.dropTable('posts')
  }

}
