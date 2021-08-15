import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateUserUseCase } from './CreateUserUseCase';

class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
      id,
      company_id,
      position_id,
      department_id,
      email,
      name,
      username,
      password,
      admin,
    } = request.body;

    const createUserUseCase = container.resolve(CreateUserUseCase);

    await createUserUseCase.execute({
      id,
      company_id,
      position_id,
      department_id,
      email,
      name,
      username,
      password,
      admin,
    });

    return response.status(201).send();
  }
}

export { CreateUserController };
