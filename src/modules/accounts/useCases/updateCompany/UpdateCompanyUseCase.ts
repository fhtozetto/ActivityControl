import { inject, injectable } from 'tsyringe';

import { Company } from '@modules/accounts/infra/typeorm/entities/Company';
import { ICompaniesRepository } from '@modules/accounts/repositories/ICompaniesRepository';
import { AppError } from '@shared/errors/AppError';

interface IRequest {
  id: string;
  group_id: string;
  code_name: string;
  name: string;
  cnpj: string;
}

@injectable()
class UpdateCompanyUseCase {
  constructor(
    @inject('CompaniesRepository')
    private companiesRepository: ICompaniesRepository,
  ) {}

  async execute({
    id,
    group_id,
    code_name,
    name,
    cnpj,
  }: IRequest): Promise<Company> {
    const companyExists = await this.companiesRepository.findById(id);

    if (!companyExists) {
      throw new AppError('Company does not exists!');
    }

    const company = await this.companiesRepository.create({
      id,
      group_id,
      code_name,
      name,
      cnpj,
    });

    return company;
  }
}

export { UpdateCompanyUseCase };
