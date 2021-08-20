import { inject, injectable } from 'tsyringe';

import { Department } from '@modules/accounts/infra/typeorm/entities/Department';
import { IDepartmentsRepository } from '@modules/accounts/repositories/IDepartmentsRepository';
import { AppError } from '@shared/errors/AppError';

interface IRequest {
  id: string;
  description: string;
}

@injectable()
class UpdateDepartmentUseCase {
  constructor(
    @inject('DepartmentsRepository')
    private departmentsRepository: IDepartmentsRepository,
  ) {}

  async execute({ id, description }: IRequest): Promise<Department> {
    const departmentExists = await this.departmentsRepository.findById(id);

    if (!departmentExists) {
      throw new AppError('Department does not exists!');
    }

    const department = await this.departmentsRepository.create({
      id,
      description,
    });

    return department;
  }
}

export { UpdateDepartmentUseCase };
