// import { ConnectionOptions } from 'typeorm';
// import {VehicleGpsDevice, Permission, Customer, CustomerAddress, CustomerContact, CustomerFile, CustomerProfile, Vehicle, VehicleMaintenance, DltDeviceCert, DltMasterfile, DltMasterfileItem, Filestore, CardReaderDevice, GpsDevice, Role, Invoice, Payment, PurchaseOrder, PurchaseOrderItem, Receipt, ConfirmationEmailToken, ResetPasswordToken, User, Facebook, Google } from 'bs-db-live/dist';
// import config from './config';

// const mysql = config().mysql;

// const TypeOrmConfig: ConnectionOptions = {
//   type: 'mysql',
//   host: mysql.host,
//   port: mysql.port,
//   username: mysql.username,
//   password: mysql.password,
//   database: mysql.database,
//   // entities: [__dirname + '/**/*.entity{.ts,.js}'],
//   entities: [VehicleGpsDevice, Permission, CustomerAddress, CustomerContact, Customer, CustomerFile, CustomerProfile,
//     Vehicle, VehicleMaintenance, DltDeviceCert, DltMasterfile,
//     DltMasterfileItem, Filestore, CardReaderDevice, GpsDevice,
//     Role, Invoice, Payment, PurchaseOrder,
//     PurchaseOrderItem, Receipt, ConfirmationEmailToken, ResetPasswordToken,
//     User, Facebook, Google],
//   synchronize: true,
//   timezone: 'UTC',
//   charset: 'UTF8_UNICODE_CI',

//   // Run migrations automatically,
//   // you can disable this if you prefer running migration manually.
//   migrationsRun: true,
//   logging: false,
//   logger: 'advanced-console',

//   // Allow both start:prod and start:dev to use migrations
//   // __dirname is either dist or src folder, meaning either
//   // the compiled js in prod or the ts in dev.
//   migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
//   cli: {
//     // Location of migration should be inside src folder
//     // to be compiled into dist/ folder.
//     migrationsDir: 'src/migrations',
//   },
// };

// export = TypeOrmConfig;
