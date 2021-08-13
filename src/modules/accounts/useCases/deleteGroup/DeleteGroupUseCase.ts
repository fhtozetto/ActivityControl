import { inject, injectable } from 'tsyringe';

import { GroupsRepository } from '@modules/accounts/infra/typeorm/repositories/GroupsRepository';

@injectable()
class DeleteGroupUseCase {
  constructor(
    @inject('GroupsRepository')
    private groupsRepository: GroupsRepository,
  ) {}

  async execute(id: string): Promise<void> {
    await this.groupsRepository.deleteById(id);
  }
}

export { DeleteGroupUseCase };
