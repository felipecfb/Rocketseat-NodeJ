import { MigrationInterface, QueryRunner } from "typeorm";

export class default1675082799861 implements MigrationInterface {
    name = 'default1675082799861'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "specifications_cars" DROP CONSTRAINT "FK_66614112344be35cba62a23beb0"`);
        await queryRunner.query(`ALTER TABLE "specifications_cars" DROP CONSTRAINT "FK_a9606be942c7a7983466a0aa300"`);
        await queryRunner.query(`ALTER TABLE "specifications_cars" DROP CONSTRAINT "FK_06812f537c06afbf37a9938f352"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_a9606be942c7a7983466a0aa30"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_66614112344be35cba62a23beb"`);
        await queryRunner.query(`ALTER TABLE "specifications_cars" DROP CONSTRAINT "PK_ea4fd455da40b175e60b6482351"`);
        await queryRunner.query(`ALTER TABLE "specifications_cars" ADD CONSTRAINT "PK_c383d8d562630982724d153da57" PRIMARY KEY ("car_id", "id")`);
        await queryRunner.query(`ALTER TABLE "specifications_cars" DROP COLUMN "specifications_id"`);
        await queryRunner.query(`ALTER TABLE "specifications_cars" DROP CONSTRAINT "PK_c383d8d562630982724d153da57"`);
        await queryRunner.query(`ALTER TABLE "specifications_cars" ADD CONSTRAINT "PK_a9606be942c7a7983466a0aa300" PRIMARY KEY ("car_id")`);
        await queryRunner.query(`ALTER TABLE "specifications_cars" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "specifications_cars" DROP COLUMN "created_at"`);
        await queryRunner.query(`ALTER TABLE "specifications_cars" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "specifications_cars" DROP CONSTRAINT "PK_a9606be942c7a7983466a0aa300"`);
        await queryRunner.query(`ALTER TABLE "specifications_cars" ADD CONSTRAINT "PK_c383d8d562630982724d153da57" PRIMARY KEY ("car_id", "id")`);
        await queryRunner.query(`ALTER TABLE "specifications_cars" ADD "created_at" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone`);
        await queryRunner.query(`ALTER TABLE "specifications_cars" DROP CONSTRAINT "PK_c383d8d562630982724d153da57"`);
        await queryRunner.query(`ALTER TABLE "specifications_cars" ADD CONSTRAINT "PK_f3550963d8e802bee11635309c7" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "specifications_cars" DROP CONSTRAINT "PK_f3550963d8e802bee11635309c7"`);
        await queryRunner.query(`ALTER TABLE "specifications_cars" ADD CONSTRAINT "PK_c383d8d562630982724d153da57" PRIMARY KEY ("id", "car_id")`);
        await queryRunner.query(`ALTER TABLE "specifications_cars" DROP CONSTRAINT "PK_c383d8d562630982724d153da57"`);
        await queryRunner.query(`ALTER TABLE "specifications_cars" ADD CONSTRAINT "PK_6ac3d4dd084b53b1a71d964b824" PRIMARY KEY ("car_id", "id", "specification_id")`);
        await queryRunner.query(`CREATE INDEX "IDX_a9606be942c7a7983466a0aa30" ON "specifications_cars" ("car_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_06812f537c06afbf37a9938f35" ON "specifications_cars" ("specification_id") `);
        await queryRunner.query(`ALTER TABLE "specifications_cars" ADD CONSTRAINT "FK_a9606be942c7a7983466a0aa300" FOREIGN KEY ("car_id") REFERENCES "cars"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "specifications_cars" ADD CONSTRAINT "FK_06812f537c06afbf37a9938f352" FOREIGN KEY ("specification_id") REFERENCES "specifications"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "specifications_cars" DROP CONSTRAINT "FK_06812f537c06afbf37a9938f352"`);
        await queryRunner.query(`ALTER TABLE "specifications_cars" DROP CONSTRAINT "FK_a9606be942c7a7983466a0aa300"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_06812f537c06afbf37a9938f35"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_a9606be942c7a7983466a0aa30"`);
        await queryRunner.query(`ALTER TABLE "specifications_cars" DROP CONSTRAINT "PK_6ac3d4dd084b53b1a71d964b824"`);
        await queryRunner.query(`ALTER TABLE "specifications_cars" ADD CONSTRAINT "PK_c383d8d562630982724d153da57" PRIMARY KEY ("car_id", "id")`);
        await queryRunner.query(`ALTER TABLE "specifications_cars" DROP CONSTRAINT "PK_c383d8d562630982724d153da57"`);
        await queryRunner.query(`ALTER TABLE "specifications_cars" ADD CONSTRAINT "PK_f3550963d8e802bee11635309c7" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "specifications_cars" DROP CONSTRAINT "PK_f3550963d8e802bee11635309c7"`);
        await queryRunner.query(`ALTER TABLE "specifications_cars" ADD CONSTRAINT "PK_c383d8d562630982724d153da57" PRIMARY KEY ("car_id", "id")`);
        await queryRunner.query(`ALTER TABLE "specifications_cars" DROP COLUMN "created_at"`);
        await queryRunner.query(`ALTER TABLE "specifications_cars" DROP CONSTRAINT "PK_c383d8d562630982724d153da57"`);
        await queryRunner.query(`ALTER TABLE "specifications_cars" ADD CONSTRAINT "PK_a9606be942c7a7983466a0aa300" PRIMARY KEY ("car_id")`);
        await queryRunner.query(`ALTER TABLE "specifications_cars" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "specifications_cars" ADD "created_at" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone`);
        await queryRunner.query(`ALTER TABLE "specifications_cars" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "specifications_cars" DROP CONSTRAINT "PK_a9606be942c7a7983466a0aa300"`);
        await queryRunner.query(`ALTER TABLE "specifications_cars" ADD CONSTRAINT "PK_c383d8d562630982724d153da57" PRIMARY KEY ("car_id", "id")`);
        await queryRunner.query(`ALTER TABLE "specifications_cars" ADD "specifications_id" uuid NOT NULL`);
        await queryRunner.query(`ALTER TABLE "specifications_cars" DROP CONSTRAINT "PK_c383d8d562630982724d153da57"`);
        await queryRunner.query(`ALTER TABLE "specifications_cars" ADD CONSTRAINT "PK_ea4fd455da40b175e60b6482351" PRIMARY KEY ("car_id", "id", "specifications_id")`);
        await queryRunner.query(`CREATE INDEX "IDX_66614112344be35cba62a23beb" ON "specifications_cars" ("specifications_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_a9606be942c7a7983466a0aa30" ON "specifications_cars" ("car_id") `);
        await queryRunner.query(`ALTER TABLE "specifications_cars" ADD CONSTRAINT "FK_06812f537c06afbf37a9938f352" FOREIGN KEY ("specification_id") REFERENCES "specifications"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "specifications_cars" ADD CONSTRAINT "FK_a9606be942c7a7983466a0aa300" FOREIGN KEY ("car_id") REFERENCES "cars"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "specifications_cars" ADD CONSTRAINT "FK_66614112344be35cba62a23beb0" FOREIGN KEY ("specifications_id") REFERENCES "specifications"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

}
