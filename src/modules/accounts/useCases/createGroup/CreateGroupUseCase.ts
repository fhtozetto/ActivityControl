import { inject, injectable } from 'tsyringe';

import { Group } from '@modules/accounts/infra/typeorm/entities/Group';
import { GroupsRepository } from '@modules/accounts/infra/typeorm/repositories/GroupRepository';
import { AppError } from '@shared/errors/AppError';

interface IRequest {
  id?: string;
  name: string;
}

@injectable()
class CreateGroupUseCase {
  constructor(
    @inject('GroupsRepository')
    private groupsRepository: GroupsRepository,
  ) {}

  async execute({ id, name }: IRequest): Promise<Group> {
    const groupAlreadyExists = await this.groupsRepository.findByName(name);

    if (!id && groupAlreadyExists) {
      throw new AppError('Group already exists!');
    }

    const group = this.groupsRepository.create({ id, name });

    return group;
  }
}

export { CreateGroupUseCase };
