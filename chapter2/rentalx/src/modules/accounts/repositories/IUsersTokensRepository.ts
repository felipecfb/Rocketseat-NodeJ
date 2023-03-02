import { IGenerateUserTokenDTO } from '../dtos/IGenerateUserTokenDTO';
import { UsersTokens } from '../infra/typeorm/entities/UsersTokens';

interface IUsersTokensRepository {
  generate({
    expires_date,
    refresh_token,
    user_id,
  }: IGenerateUserTokenDTO): Promise<UsersTokens>;
}

export { IUsersTokensRepository };
