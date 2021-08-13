import { inject, injectable } from 'tsyringe';

import { Group } from '@modules/accounts/infra/typeorm/entities/Group';
import { GroupsRepository } from '@modules/accounts/infra/typeorm/repositories/GroupsRepository';
import { AppError } from '@shared/errors/AppError';

interface IRequest {
  name: string;
}

@injectable()
class CreateGroupUseCase {
  constructor(
    @inject('GroupsRepository')
    private groupsRepository: GroupsRepository,
  ) {}

  async execute({ name }: IRequest): Promise<Group> {
    const groupAlreadyExists = await this.groupsRepository.findByName(name);

    if (groupAlreadyExists) {
      throw new AppError('Group already exists!');
    }

    const group = this.groupsRepository.create({ name });

    return group;
  }
}

export { CreateGroupUseCase };
