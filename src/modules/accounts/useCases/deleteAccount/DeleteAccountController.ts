import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { DeleteAccountUseCase } from './DeleteAccountUseCase';

class DeleteAccountController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.headers;

    const deleteAccountUseCase = container.resolve(DeleteAccountUseCase);

    await deleteAccountUseCase.execute(id as string);

    return response.status(204).send();
  }
}

export { DeleteAccountController };
