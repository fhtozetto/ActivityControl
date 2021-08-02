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
    account_id,
    group_id,
    name,
    cnpj,
    code_name,
  }: ICreateCompanyDTO): Promise<Company> {
    const company = await this.repository.create({
      id,
      account_id,
      group_id,
      name,
      cnpj,
      code_name,
    });

    const newCompany = await this.repository.save(company);

    return newCompany;
  }

  async deleteById(id: string): Promise<void> {
    await this.repository.delete(id);
  }

  async findById(id: string): Promise<Company> {
    const company = await this.repository.findOne(id);

    return company;
  }

  async findByCNPJ(cnpj: string): Promise<Company> {
    const company = this.repository.findOne({ cnpj });

    return company;
  }
}

export { CompaniesRepository };
