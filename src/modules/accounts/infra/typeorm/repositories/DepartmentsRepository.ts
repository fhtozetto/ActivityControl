import { getRepository, Repository } from 'typeorm';

import { ICreateDepartmentDTO } from '@modules/accounts/dtos/ICreateDepartmentDTO';
import { IDepartmentsRepository } from '@modules/accounts/repositories/IDepartmentsRepository';

import { Department } from '../entities/Department';

class DepartmentsRepository implements IDepartmentsRepository {
  private repository: Repository<Department>;

  constructor() {
    this.repository = getRepository(Department);
  }

  async findByName(name: string): Promise<Department> {
    const department = await this.repository.findOne(name);

    return department;
  }

  async create({
    account_id,
    description,
  }: ICreateDepartmentDTO): Promise<Department> {
    const department = this.repository.create({ account_id, description });

    await this.repository.save(department);

    return department;
  }
}

export { DepartmentsRepository };
