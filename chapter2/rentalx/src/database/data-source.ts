import { DataSource } from 'typeorm';
import 'reflect-metadata';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'db_rentx',
  port: 5432,
  username: 'docker',
  password: 'ignite',
  database: 'db_rentx',
  entities: [`${__dirname}/**/entities/*.{ts,js}`],
  migrations: [`${__dirname}/**/migrations/*.{ts,js}`],
});

AppDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
  })
  .catch(err => {
    console.error('Error during Data Source initialization', err);
  });
