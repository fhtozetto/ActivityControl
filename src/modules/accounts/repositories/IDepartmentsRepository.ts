import { ICreateDepartmentDTO } from '../dtos/ICreateDepartmentDTO';
import { Department } from '../infra/typeorm/entities/Department';

interface IDepartmentsRepository {
  create({
    id,
    account_id,
    description,
  }: ICreateDepartmentDTO): Promise<Department>;
  findByName(name: string): Promise<Department>;
}

export { IDepartmentsRepository };
