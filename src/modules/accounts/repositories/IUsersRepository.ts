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
    avatar, // verificar se é necessário colocar o avatar direto na criação.
  }: ICreateUserDTO): Promise<User>;
  deleteById(id: string): Promise<void>;
  findById(id: string): Promise<User>;
  findByUserName(username: string): Promise<User>;
}

export { IUsersRepository };
