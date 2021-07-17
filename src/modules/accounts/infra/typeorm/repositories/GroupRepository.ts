import { getRepository, Repository } from 'typeorm';

import { ICreateGroupDTO } from '@modules/accounts/dtos/ICreateGroupDTO';
import { IGroupsRepository } from '@modules/accounts/repositories/IGroupRepository';

import { Group } from '../entities/Group';

class GroupsRepository implements IGroupsRepository {
  private repository: Repository<Group>;

  constructor() {
    this.repository = getRepository(Group);
  }

  async findByName(name: string): Promise<Group> {
    const group = this.repository.findOne({ name });

    return group;
  }
  async create({ id, name }: ICreateGroupDTO): Promise<Group> {
    const group = this.repository.create({
      id,
      name,
    });

    await this.repository.save(group);

    return group;
  }
}

export { GroupsRepository };
