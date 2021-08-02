import { inject, injectable } from 'tsyringe';

import { DepartmentsRepository } from '@modules/accounts/infra/typeorm/repositories/DepartmentsRepository';

@injectable()
class DeleteDepartmentUseCase {
  constructor(
    @inject('DepartmentsRepository')
    private departmentsRepository: DepartmentsRepository,
  ) {}

  async execute(id: string): Promise<void> {
    await this.departmentsRepository.deleteById(id);
  }
}

export { DeleteDepartmentUseCase };
