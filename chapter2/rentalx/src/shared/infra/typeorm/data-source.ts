import 'reflect-metadata';
import { DataSource, DataSourceOptions } from 'typeorm';
import { SeederOptions } from 'typeorm-extension';

const database = process.env.NODE_ENV === 'test' ? 'db_rentx_test' : 'db_rentx';
const host = process.env.NODE_ENV === 'test' ? 'localhost' : 'db_rentx';

const options: DataSourceOptions & SeederOptions = {
  type: 'postgres',
  host: host,
  port: 5432,
  username: 'docker',
  password: 'ignite',
  database: database,
  entities: ['./src/modules/**/entities/*.{ts,js}'],
  migrations: ['./src/shared/**/migrations/*.{ts,js}'],
  seeds: ['./src/shared/infra/typeorm/seeds/UserAdminSeeder.ts'],
  synchronize: true,
};

const AppDataSource = new DataSource(options);

AppDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
  })
  .catch(err => {
    console.error('Error during Data Source initialization', err);
  });

export { AppDataSource };
