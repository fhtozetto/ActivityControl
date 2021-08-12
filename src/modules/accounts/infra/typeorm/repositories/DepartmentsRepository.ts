import { getRepository, Repository } from 'typeorm';

import { ICreateDepartmentDTO } from '@modules/accounts/dtos/ICreateDepartmentDTO';
import { IDepartmentsRepository } from '@modules/accounts/repositories/IDepartmentsRepository';

import { Department } from '../entities/Department';

class DepartmentsRepository implements IDepartmentsRepository {
  private repository: Repository<Department>;

  constructor() {
    this.repository = getRepository(Department);
  }

  async create({ id, description }: ICreateDepartmentDTO): Promise<Department> {
    const department = this.repository.create({ id, description });

    const newDepartment = await this.repository.save(department);

    return newDepartment;
  }

  async deleteById(id: string): Promise<void> {
    await this.repository.delete(id);
  }

  async findByName(description: string): Promise<Department> {
    const department = await this.repository.findOne({ description });

    return department;
  }
}

export { DepartmentsRepository };
