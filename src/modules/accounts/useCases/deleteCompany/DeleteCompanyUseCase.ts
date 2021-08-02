import { inject, injectable } from 'tsyringe';

import { CompaniesRepository } from '@modules/accounts/infra/typeorm/repositories/CompaniesRepository';

@injectable()
class DeleteCompanyUseCase {
  constructor(
    @inject('CompaniesRepository')
    private companiesRepository: CompaniesRepository,
  ) {}

  async execute(id: string): Promise<void> {
    await this.companiesRepository.deleteById(id);
  }
}

export { DeleteCompanyUseCase };
