import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateAccountUseCase } from './CreateAccountUseCase';

class CreateAccountController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name } = request.body;

    const createAccountUseCase = container.resolve(CreateAccountUseCase);

    const account = await createAccountUseCase.execute({ name });

    return response.status(201).json(account);
  }
}

export { CreateAccountController };
