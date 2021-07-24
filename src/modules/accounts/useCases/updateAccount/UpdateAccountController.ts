import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdateAccountUseCase } from './UpdateAccountUseCase';

class UpdateAccountController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id, name } = request.body;

    const updateAccountUseCase = container.resolve(UpdateAccountUseCase);

    await updateAccountUseCase.execute({ id, name });

    return response.status(204).send();
  }
}

export { UpdateAccountController };
