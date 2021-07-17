import { ICreateGroupDTO } from '../dtos/ICreateGroupDTO';
import { Group } from '../infra/typeorm/entities/Group';

interface IGroupsRepository {
  findByName(name: string): Promise<Group>;
  create({ id, name }: ICreateGroupDTO): Promise<Group>;
}

export { IGroupsRepository };
