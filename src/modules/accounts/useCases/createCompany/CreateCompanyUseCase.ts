import { inject, injectable } from 'tsyringe';

import { Company } from '@modules/accounts/infra/typeorm/entities/Company';
import { ICompaniesRepository } from '@modules/accounts/repositories/ICompaniesRepository';
import { AppError } from '@shared/errors/AppError';

interface IRequest {
  id: string;
  group_id: string;
  name: string;
  code_name: string;
  cnpj: string;
}

@injectable()
class CreateCompanyUseCase {
  constructor(
    @inject('CompaniesRepository')
    private companiesRepository: ICompaniesRepository,
  ) {}

  async execute({
    id,
    group_id,
    name,
    code_name,
    cnpj,
  }: IRequest): Promise<Company> {
    const companyAlreadyExists = await this.companiesRepository.findByCNPJ(
      cnpj,
    );

    if (companyAlreadyExists && !id) {
      throw new AppError('Company already exists!');
    }

    const company = await this.companiesRepository.create({
      id,
      group_id,
      name,
      code_name,
      cnpj,
    });

    return company;
  }
}

export { CreateCompanyUseCase };
