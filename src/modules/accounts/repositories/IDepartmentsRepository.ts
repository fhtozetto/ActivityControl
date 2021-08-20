import { ICreateDepartmentDTO } from '../dtos/ICreateDepartmentDTO';
import { Department } from '../infra/typeorm/entities/Department';

interface IDepartmentsRepository {
  create({ id, description }: ICreateDepartmentDTO): Promise<Department>;
  deleteById(id: string): Promise<void>;
  findByName(name: string): Promise<Department>;
  findById(id: string): Promise<Department>;
}

export { IDepartmentsRepository };
