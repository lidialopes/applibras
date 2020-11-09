import {MigrationInterface, QueryRunner, Table} from "typeorm";

export default class CreateSign1604708178391 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`);
      
      await queryRunner.createTable(
            new Table({
              name: 'sign',
              columns: [
                {
                  name: 'id',
                  type: 'varchar',
                  length: '36',
                  isPrimary: true,
                  generationStrategy: 'uuid',
                  default: 'uuid_generate_v4()',
                },
                {
                  name: 'title',
                  type: 'varchar',
                },
                {
                  name: 'video_url',
                  type: 'varchar',
                },
                {
                  name: 'image_url',
                  type: 'varchar',
                },
                {
                  name: 'description',
                  type: 'varchar',
                },
                {
                  name: 'tags',
                  type: 'character varying[]',
                },
                {
                  name: 'created_at',
                  type: 'timestamp',
                  default: 'now()',
                },
                {
                  name: 'updated_at',
                  type: 'timestamp',
                  default: 'now()',
                },
              ],
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('sign');
    }
}
