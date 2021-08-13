import { getRepository, Repository } from 'typeorm';

import { ICreateUserDTO } from '@modules/accounts/dtos/ICreateUserDTO';
import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository';

import { User } from '../entities/User';

class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async create({
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
    avatar,
  }: ICreateUserDTO): Promise<User> {
    const user = this.repository.create({
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
      avatar,
    });

    const newUser = await this.repository.save(user);

    return newUser;
  }

  async deleteById(id: string): Promise<void> {
    await this.repository.delete(id);
  }

  async findById(id: string): Promise<User> {
    const user = await this.repository.findOne(id);
    return user;
  }

  async findByUserName(username: string): Promise<User> {
    const user = await this.repository.findOne({ username });
    return user;
  }
}

export { UsersRepository };
