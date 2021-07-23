import { inject, injectable } from 'tsyringe';

import { Department } from '@modules/accounts/infra/typeorm/entities/Department';
import { IDepartmentsRepository } from '@modules/accounts/repositories/IDepartmentsRepository';
import { AppError } from '@shared/errors/AppError';

interface IRequest {
  id?: string;
  account_id: string;
  description: string;
}

@injectable()
class CreateDepartmentUseCase {
  constructor(
    @inject('DepartmentsRepository')
    private departmentsRepository: IDepartmentsRepository,
  ) {}

  async execute({ account_id, description }: IRequest): Promise<Department> {
    const departmentAlreadyExists = await this.departmentsRepository.findByName(
      description,
    );

    if (departmentAlreadyExists) {
      throw new AppError('department already exists!');
    }

    const department = await this.departmentsRepository.create({
      account_id,
      description,
    });
    return department;
  }
}

export { CreateDepartmentUseCase };
