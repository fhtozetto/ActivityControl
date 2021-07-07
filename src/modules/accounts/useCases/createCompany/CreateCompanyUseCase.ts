import { inject, injectable } from 'tsyringe';

import { Company } from '@modules/accounts/infra/typeorm/entities/Company';
import { ICompaniesRepository } from '@modules/accounts/repositories/ICompaniesRepository';
import { AppError } from '@shared/errors/AppError';

interface IRequest {
  id: string;
  code_name: string;
  name: string;
  cnpj: string;
}

@injectable()
class CreateCompanyUseCase {
  constructor(
    @inject('CompaniesRepository')
    private companiesRepository: ICompaniesRepository,
  ) {}

  async execute({ id, code_name, name, cnpj }: IRequest): Promise<Company> {
    const companyAlreadyExists = await this.companiesRepository.findByCNPJ(
      cnpj,
    );

    if (companyAlreadyExists && !id) {
      throw new AppError('Company already exists!');
    }

    const company = await this.companiesRepository.create({
      id,
      code_name,
      name,
      cnpj,
    });

    return company;
  }
}

export { CreateCompanyUseCase };
