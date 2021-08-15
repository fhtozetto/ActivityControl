import { hash } from 'bcrypt';
import { inject, injectable } from 'tsyringe';

import { ICreateUserDTO } from '@modules/accounts/dtos/ICreateUserDTO';
import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository';
import { AppError } from '@shared/errors/AppError';

@injectable()
class CreateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  async execute({
    id,
    company_id,
    position_id,
    department_id,
    email,
    name,
    username,
    password,
    admin,
  }: ICreateUserDTO): Promise<void> {
    const userAlreadyExists = await this.usersRepository.findByUserName(
      username,
    );

    if (userAlreadyExists) {
      throw new AppError('User name already exists.');
    }

    const passwordHash = await hash(password, 8);

    await this.usersRepository.create({
      id,
      company_id,
      position_id,
      department_id,
      email,
      name,
      username,
      password: passwordHash,
      active: true,
      admin,
    });
  }
}

export { CreateUserUseCase };
