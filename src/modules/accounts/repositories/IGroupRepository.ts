import { ICreateGroupDTO } from '../dtos/ICreateGroupDTO';
import { Group } from '../infra/typeorm/entities/Group';

interface IGroupsRepository {
  findByName(name: string): Promise<Group>;
  deleteById(id: string): Promise<void>;
  create({ account_id, name }: ICreateGroupDTO): Promise<Group>;
}

export { IGroupsRepository };
