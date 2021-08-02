import { inject, injectable } from 'tsyringe';

import { AccountsRepository } from '@modules/accounts/infra/typeorm/repositories/AccountsRepository';

@injectable()
class DeleteAccountUseCase {
  constructor(
    @inject('AccountsRepository')
    private accountsRepository: AccountsRepository,
  ) {}

  async execute(id: string): Promise<void> {
    await this.accountsRepository.deleteById(id);
  }
}

export { DeleteAccountUseCase };
