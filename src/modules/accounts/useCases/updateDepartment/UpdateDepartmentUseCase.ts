import { inject, injectable } from 'tsyringe';

import { Department } from '@modules/accounts/infra/typeorm/entities/Department';
import { IDepartmentsRepository } from '@modules/accounts/repositories/IDepartmentsRepository';

interface IRequest {
  id: string;
  account_id: string;
  description: string;
}

@injectable()
class UpdateDepartmentUseCase {
  constructor(
    @inject('DepartmentsRepository')
    private departmentsRepository: IDepartmentsRepository,
  ) {}

  async execute({
    id,
    account_id,
    description,
  }: IRequest): Promise<Department> {
    const department = await this.departmentsRepository.create({
      id,
      account_id,
      description,
    });

    return department;
  }
}

export { UpdateDepartmentUseCase };
