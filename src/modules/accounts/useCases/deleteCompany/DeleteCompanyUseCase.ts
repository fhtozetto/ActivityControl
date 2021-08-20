import { inject, injectable } from 'tsyringe';

import { CompaniesRepository } from '@modules/accounts/infra/typeorm/repositories/CompaniesRepository';
import { AppError } from '@shared/errors/AppError';

@injectable()
class DeleteCompanyUseCase {
  constructor(
    @inject('CompaniesRepository')
    private companiesRepository: CompaniesRepository,
  ) {}

  async execute(id: string): Promise<void> {
    const company = await this.companiesRepository.findById(id);

    if (!company) {
      throw new AppError('Company does not exists!');
    }

    await this.companiesRepository.deleteById(id);
  }
}

export { DeleteCompanyUseCase };
