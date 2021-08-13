import { getRepository, Repository } from 'typeorm';

import { ICreateGroupDTO } from '@modules/accounts/dtos/ICreateGroupDTO';
import { IGroupsRepository } from '@modules/accounts/repositories/IGroupsRepository';

import { Group } from '../entities/Group';

class GroupsRepository implements IGroupsRepository {
  private repository: Repository<Group>;

  constructor() {
    this.repository = getRepository(Group);
  }

  async create({ id, name }: ICreateGroupDTO): Promise<Group> {
    const group = this.repository.create({
      id,
      name,
    });

    await this.repository.save(group);

    return group;
  }

  async deleteById(id: string): Promise<void> {
    await this.repository.delete(id);
  }

  async findByName(name: string): Promise<Group> {
    const group = await this.repository.findOne({ name });

    return group;
  }
}

export { GroupsRepository };
