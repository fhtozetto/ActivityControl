import { inject, injectable } from 'tsyringe';

import { Group } from '@modules/accounts/infra/typeorm/entities/Group';
import { IGroupsRepository } from '@modules/accounts/repositories/IGroupsRepository';

interface IRequest {
  id: string;
  name: string;
}

@injectable()
class UpdateGroupUseCase {
  constructor(
    @inject('GroupsRepository')
    private groupsRepository: IGroupsRepository,
  ) {}

  async execute({ id, name }: IRequest): Promise<Group> {
    const group = await this.groupsRepository.create({ id, name });

    return group;
  }
}

export { UpdateGroupUseCase };
