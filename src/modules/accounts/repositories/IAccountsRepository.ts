import { ICreateAccountDTO } from '../dtos/ICreateAccountDTO';
import { Account } from '../infra/typeorm/entities/Account';

interface IAccountsRepository {
  create(data: ICreateAccountDTO): Promise<Account>;
  findByName(name: string): Promise<Account>;
}

export { IAccountsRepository };
