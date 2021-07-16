import { inject, injectable } from 'tsyringe';

import { Account } from '@modules/accounts/infra/typeorm/entities/Account';
import { IAccountsRepository } from '@modules/accounts/repositories/IAccountsRepository';
import { AppError } from '@shared/errors/AppError';

interface IRequest {
  name: string;
}

@injectable()
class CreateAccountUseCase {
  constructor(
    @inject('AccountsRepository')
    private accountsRepository: IAccountsRepository,
  ) {}

  async execute({ name }: IRequest): Promise<Account> {
    const accountAlreadyExists = await this.accountsRepository.findByName(name);

    if (accountAlreadyExists) {
      throw new AppError('Account already exists!');
    }

    const account = await this.accountsRepository.create({ name });
    return account;
  }
}

export { CreateAccountUseCase };
