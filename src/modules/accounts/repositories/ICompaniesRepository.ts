import { ICreateCompanyDTO } from '../dtos/ICreateCompanyDTO';
import { Company } from '../infra/typeorm/entities/Company';

interface ICompaniesRepository {
  create({
    group_id,
    name,
    code_name,
    cnpj,
  }: ICreateCompanyDTO): Promise<Company>;
  deleteById(id: string): Promise<void>;
  findById(id: string): Promise<Company>;
  findByCNPJ(cnpj: string): Promise<Company>;
}

export { ICompaniesRepository };
