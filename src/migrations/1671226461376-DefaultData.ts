import { MigrationInterface, QueryRunner } from "typeorm"

export class DefaultData1671226461376 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // Account Types
        await queryRunner.manager.query(`INSERT INTO account_type(id,name,status) VALUES ('b4e8b351-e1e0-43c4-be37-cead1603bef9','CUSTOMER','ENABLED');`);
        await queryRunner.manager.query(`INSERT INTO account_type(id,name,status) VALUES ('e0a4b4b5-3272-4e0a-8c23-9ec5c60ed804','ADMIN','ENABLED');`);

        // Categories
        await queryRunner.manager.query(`INSERT INTO category(id,name,description) VALUES ('b4e8b351-e1e0-43c4-be37-cead1603bef9','toys','xxxx');`);
        await queryRunner.manager.query(`INSERT INTO category(id,name,description) VALUES ('2748edfe-8c68-4130-96bf-2c77a9b95450','fashions','xxxx');`);
        await queryRunner.manager.query(`INSERT INTO category(id,name,description) VALUES ('81d019df-6014-4d00-ac0e-e7d0390502ac','electronics','xxxx');`);

        // Products
        await queryRunner.manager.query(`INSERT INTO product(id,name,product_code,price,status,category_id) VALUES ('de4127af-2e45-4e98-a0d2-d36e10350702','ขวดน้ำลายการ์ตูน','ABC001',199,'IN STOCK','b4e8b351-e1e0-43c4-be37-cead1603bef9');`);
        await queryRunner.manager.query(`INSERT INTO product(id,name,product_code,price,status,category_id) VALUES ('9238bd1b-d745-4200-b89e-fda70518554c','ตุ๊กตาลายกระต่าย','ABC002',299,'IN STOCK','b4e8b351-e1e0-43c4-be37-cead1603bef9');`);
        await queryRunner.manager.query(`INSERT INTO product(id,name,product_code,price,status,category_id) VALUES ('93b3dbd8-d1c5-45eb-8503-276c183d46f3','เสื้อเชิ้ต','ABC003',349,'IN STOCK','2748edfe-8c68-4130-96bf-2c77a9b95450');`);
        await queryRunner.manager.query(`INSERT INTO product(id,name,product_code,price,status,category_id) VALUES ('608638ec-c115-4788-ac16-eb7b87f1886b','เสื้อคอปก','ABC004',199,'IN STOCK','2748edfe-8c68-4130-96bf-2c77a9b95450');`);
        await queryRunner.manager.query(`INSERT INTO product(id,name,product_code,price,status,category_id) VALUES ('67d6b9e9-26d5-4d79-9b32-edf6e707d3e6','Monitor ABC 24"','ABC005',3599,'IN STOCK','81d019df-6014-4d00-ac0e-e7d0390502ac');`);
        await queryRunner.manager.query(`INSERT INTO product(id,name,product_code,price,status,category_id) VALUES ('2f2c8449-4ec0-477a-acac-4f5337ecfda4','USB Hub','ABC006',500,'IN STOCK','81d019df-6014-4d00-ac0e-e7d0390502ac');`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.manager.query(`DELETE FROM account_type;`);
        await queryRunner.manager.query(`DELETE FROM category;`);
        await queryRunner.manager.query(`DELETE FROM product;`);
    }

}
