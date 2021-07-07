import { getRepository, Repository } from 'typeorm';

import { ICreateCompanyDTO } from '@modules/accounts/dtos/ICreateCompanyDTO';
import { ICompaniesRepository } from '@modules/accounts/repositories/ICompaniesRepository';

import { Company } from '../entities/Company';

class CompaniesRepository implements ICompaniesRepository {
  private repository: Repository<Company>;

  constructor() {
    this.repository = getRepository(Company);
  }

  async create({
    id,
    code_name,
    name,
    cnpj,
  }: ICreateCompanyDTO): Promise<Company> {
    const company = await this.repository.create({
      id,
      code_name,
      name,
      cnpj,
    });

    const newCompany = await this.repository.save(company);

    return newCompany;
  }

  async findById(id: string): Promise<Company> {
    const company = await this.repository.findOne(id);

    return company;
  }

  async deleteById(id: string): Promise<void> {
    this.repository.delete(id);
  }

  async findByCNPJ(cnpj: string): Promise<Company> {
    const company = this.repository.findOne({ cnpj });

    return company;
  }
}

export { CompaniesRepository };
