import { MigrationInterface, QueryRunner } from 'typeorm';

export class Tables1701051474773 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
    CREATE TABLE "users" (
      "id" SERIAL NOT NULL,
      "email" character varying NOT NULL,
      "hash" character varying NOT NULL,
      "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
      "updatedAt" TIMESTAMP NOT NULL DEFAULT now(),
      CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id")
    )
    `);
    await queryRunner.query(`
    CREATE TABLE "movies" (
      "id" SERIAL NOT NULL,
      "movie" character varying NOT NULL,
      "description" character varying NOT NULL,
      "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
      "updatedAt" TIMESTAMP NOT NULL DEFAULT now(),
      CONSTRAINT "PK_3d8016e1cbda236aec6e4auto" PRIMARY KEY ("id")
    )
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "users"`);
  }
}
