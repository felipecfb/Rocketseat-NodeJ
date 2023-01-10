import { Repository } from 'typeorm';

import { AppDataSource } from '../../../../database/data-source';
import { User } from '../../../../database/entities/User';
import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';
import { IUsersRepository } from '../IUsersRepository';

class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = AppDataSource.getRepository(User);
  }

  async create({
    name,
    username,
    email,
    driver_license,
    password,
  }: ICreateUserDTO): Promise<void> {
    const user = this.repository.create({
      name,
      username,
      email,
      driver_license,
      password,
    });

    await this.repository.save(user);
  }
}

export { UsersRepository };
