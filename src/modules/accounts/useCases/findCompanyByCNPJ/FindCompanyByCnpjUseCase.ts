import { inject, injectable } from 'tsyringe';

import { Company } from '@modules/accounts/infra/typeorm/entities/Company';
import { ICompaniesRepository } from '@modules/accounts/repositories/ICompaniesRepository';

@injectable()
class FindCompanyByCnpjUseCase {
  constructor(
    @inject('CompaniesRepository')
    private companiesRepository: ICompaniesRepository,
  ) {}

  async execute(cnpj: string): Promise<Company> {
    const company = await this.companiesRepository.findByCNPJ(cnpj);

    return company;
  }
}

export { FindCompanyByCnpjUseCase };
