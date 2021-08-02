import { getRepository, Repository } from 'typeorm';

import { ICreateAccountDTO } from '@modules/accounts/dtos/ICreateAccountDTO';
import { IAccountsRepository } from '@modules/accounts/repositories/IAccountsRepository';

import { Account } from '../entities/Account';

class AccountsRepository implements IAccountsRepository {
  private repository: Repository<Account>;

  constructor() {
    this.repository = getRepository(Account);
  }

  async create({ id, name }: ICreateAccountDTO): Promise<Account> {
    const account = this.repository.create({
      id,
      name,
    });

    await this.repository.save(account);

    return account;
  }

  async deleteById(id: string): Promise<void> {
    await this.repository.delete(id);
  }

  async findByName(name: string): Promise<Account> {
    const account = await this.repository.findOne({ name });

    return account;
  }
}

export { AccountsRepository };
