import { inject, injectable } from 'tsyringe';

import { Group } from '@modules/accounts/infra/typeorm/entities/Group';
import { IGroupsRepository } from '@modules/accounts/repositories/IGroupRepository';

interface IRequest {
  id: string;
  account_id: string;
  name: string;
}

@injectable()
class UpdateGroupUseCase {
  constructor(
    @inject('GroupsRepository')
    private groupsRepository: IGroupsRepository,
  ) {}

  async execute({ id, account_id, name }: IRequest): Promise<Group> {
    const group = await this.groupsRepository.create({ id, account_id, name });

    return group;
  }
}

export { UpdateGroupUseCase };