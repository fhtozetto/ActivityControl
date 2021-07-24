import { inject, injectable } from 'tsyringe';

import { Account } from '@modules/accounts/infra/typeorm/entities/Account';
import { IAccountsRepository } from '@modules/accounts/repositories/IAccountsRepository';

interface IRequest {
  id: string;
  name: string;
}

@injectable()
class UpdateAccountUseCase {
  constructor(
    @inject('AccountsRepository')
    private accountsRepository: IAccountsRepository,
  ) {}

  async execute({ id, name }: IRequest): Promise<Account> {
    const account = await this.accountsRepository.create({ id, name });

    return account;
  }
}

export { UpdateAccountUseCase };
