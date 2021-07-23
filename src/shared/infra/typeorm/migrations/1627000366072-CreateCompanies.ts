import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateCompanies1627000366072 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'companies',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
          },
          {
            name: 'account_id',
            type: 'uuid',
          },
          {
            name: 'group_id',
            type: 'uuid',
          },
          {
            name: 'code_name',
            type: 'varchar',
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'cnpj',
            type: 'varchar',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
        foreignKeys: [
          {
            name: 'FKCompanyGroup',
            referencedTableName: 'groups',
            referencedColumnNames: ['id'],
            columnNames: ['group_id'],
          },
          {
            name: 'FKCompanyAccount',
            referencedTableName: 'accounts',
            referencedColumnNames: ['id'],
            columnNames: ['account_id'],
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('companies');
  }
}
