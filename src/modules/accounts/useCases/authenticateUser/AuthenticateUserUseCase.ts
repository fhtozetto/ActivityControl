import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { inject, injectable } from 'tsyringe';

import auth from '@config/auth';
import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository';

interface IRequest {
  username: string;
  password: string;
}

interface IResponse {
  user: {
    username: string;
    email: string;
  };
  token: string;
}

@injectable()
class AuthenticateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  async execute({ username, password }: IRequest): Promise<IResponse> {
    const user = await this.usersRepository.findByUserName(username);

    if (!user) {
      throw new Error('Username or password incorrect!');
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new Error('Username or password incorrect!');
    }

    const token = sign({}, auth.secret_token, {
      subject: user.id,
      expiresIn: '1d',
    });

    const tokenReturn: IResponse = {
      token,
      user: {
        username: user.username,
        email: user.email,
      },
    };

    return tokenReturn;
  }
}

export { AuthenticateUserUseCase };
