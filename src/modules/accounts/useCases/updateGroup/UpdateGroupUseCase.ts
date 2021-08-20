import { inject, injectable } from 'tsyringe';

import { Group } from '@modules/accounts/infra/typeorm/entities/Group';
import { IGroupsRepository } from '@modules/accounts/repositories/IGroupsRepository';
import { AppError } from '@shared/errors/AppError';

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
    const groupExists = await this.groupsRepository.findById(id);

    if (!groupExists) {
      throw new AppError('Group does not exists!');
    }

    const group = await this.groupsRepository.create({ id, name });

    return group;
  }
}

export { UpdateGroupUseCase };
