import { Repository } from 'typeorm';

import { IGenerateUserTokenDTO } from '@modules/accounts/dtos/IGenerateUserTokenDTO';
import { IUsersTokensRepository } from '@modules/accounts/repositories/IUsersTokensRepository';
import { AppDataSource } from '@shared/infra/typeorm/data-source';

import { UsersTokens } from '../entities/UsersTokens';

class UsersTokensRepository implements IUsersTokensRepository {
  private repository: Repository<UsersTokens>;

  constructor() {
    this.repository = AppDataSource.getRepository(UsersTokens);
  }
  async generate({
    expires_date,
    refresh_token,
    user_id,
  }: IGenerateUserTokenDTO): Promise<UsersTokens> {
    const userToken = this.repository.create({
      expires_date,
      refresh_token,
      user_id,
    });

    await this.repository.save(userToken);

    return userToken;
  }
}

export { UsersTokensRepository };
