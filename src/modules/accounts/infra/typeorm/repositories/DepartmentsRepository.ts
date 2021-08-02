import { getRepository, Repository } from 'typeorm';

import { ICreateDepartmentDTO } from '@modules/accounts/dtos/ICreateDepartmentDTO';
import { IDepartmentsRepository } from '@modules/accounts/repositories/IDepartmentsRepository';

import { Department } from '../entities/Department';

class DepartmentsRepository implements IDepartmentsRepository {
  private repository: Repository<Department>;

  constructor() {
    this.repository = getRepository(Department);
  }

  async create({
    id,
    account_id,
    description,
  }: ICreateDepartmentDTO): Promise<Department> {
    const department = this.repository.create({ id, account_id, description });

    await this.repository.save(department);

    return department;
  }

  async deleteById(id: string): Promise<void> {
    await this.repository.delete(id);
  }

  async findByName(name: string): Promise<Department> {
    const department = await this.repository.findOne(name);

    return department;
  }
}

export { DepartmentsRepository };
