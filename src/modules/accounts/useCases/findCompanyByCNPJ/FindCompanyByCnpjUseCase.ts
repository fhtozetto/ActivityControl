import { inject, injectable } from 'tsyringe';

import { Company } from '@modules/accounts/infra/typeorm/entities/Company';
import { ICompaniesRepository } from '@modules/accounts/repositories/ICompaniesRepository';
import { AppError } from '@shared/errors/AppError';

@injectable()
class FindCompanyByCnpjUseCase {
  constructor(
    @inject('CompaniesRepository')
    private companiesRepository: ICompaniesRepository,
  ) {}

  async execute(cnpj: string): Promise<Company> {
    const company = await this.companiesRepository.findByCNPJ(cnpj);

    if (!company) {
      throw new AppError('Company not found!', 404);
    }

    return company;
  }
}

export { FindCompanyByCnpjUseCase };
