import { ICreateUserDTO } from '../dtos/ICreateUserDTO';
import { User } from '../infra/typeorm/entities/User';

interface IUsersRepository {
  create({
    id,
    company_id,
    position_id,
    department_id,
    email,
    name,
    username,
    password,
    active,
    admin,
  }: ICreateUserDTO): Promise<void>;
  deleteById(id: string): Promise<void>;
  findById(id: string): Promise<User>;
  findByUserName(username: string): Promise<User>;
}

export { IUsersRepository };
