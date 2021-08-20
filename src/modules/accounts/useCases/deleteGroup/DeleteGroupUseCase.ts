import { inject, injectable } from 'tsyringe';

import { GroupsRepository } from '@modules/accounts/infra/typeorm/repositories/GroupsRepository';
import { AppError } from '@shared/errors/AppError';

@injectable()
class DeleteGroupUseCase {
  constructor(
    @inject('GroupsRepository')
    private groupsRepository: GroupsRepository,
  ) {}

  async execute(id: string): Promise<void> {
    const group = await this.groupsRepository.findById(id);

    if (!group) {
      throw new AppError('Group does not exists!');
    }
    await this.groupsRepository.deleteById(id);
  }
}

export { DeleteGroupUseCase };
