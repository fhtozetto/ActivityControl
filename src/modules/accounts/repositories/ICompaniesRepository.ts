import { ICreateCompanyDTO } from '../dtos/ICreateCompanyDTO';
import { Company } from '../infra/typeorm/entities/Company';

interface ICompaniesRepository {
  create(data: ICreateCompanyDTO): Promise<Company>;
  findById(id: string): Promise<Company>;
  findByCNPJ(cnpj: string): Promise<Company>;
  deleteById(id: string): Promise<void>;
}

export { ICompaniesRepository };
