import { inject, injectable } from 'tsyringe';

import { DepartmentsRepository } from '@modules/accounts/infra/typeorm/repositories/DepartmentsRepository';
import { AppError } from '@shared/errors/AppError';

@injectable()
class DeleteDepartmentUseCase {
  constructor(
    @inject('DepartmentsRepository')
    private departmentsRepository: DepartmentsRepository,
  ) {}

  async execute(id: string): Promise<void> {
    const department = await this.departmentsRepository.findById(id);

    if (!department) {
      throw new AppError('Department does not exists!');
    }

    await this.departmentsRepository.deleteById(id);
  }
}

export { DeleteDepartmentUseCase };
