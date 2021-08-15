import { inject, injectable } from 'tsyringe';

import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository';

interface IRequest {
  id: string;
  name: string;
}

@injectable()
class UpdateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  async execute({ id, name }: IRequest): Promise<void> {
    const user = await this.usersRepository.findById(id);

    user.name = name;

    await this.usersRepository.create(user);
  }
}

export { UpdateUserUseCase };
