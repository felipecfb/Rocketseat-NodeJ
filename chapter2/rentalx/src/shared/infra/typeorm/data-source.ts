import 'reflect-metadata';
import { DataSource, DataSourceOptions } from 'typeorm';
import { SeederOptions } from 'typeorm-extension';

const options: DataSourceOptions & SeederOptions = {
  type: 'postgres',
  host: 'db_rentx',
  port: 5432,
  username: 'docker',
  password: 'ignite',
  database: 'db_rentx',
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
