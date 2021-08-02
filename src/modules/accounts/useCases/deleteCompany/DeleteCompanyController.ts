import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { DeleteCompanyUseCase } from './DeleteCompanyUseCase';

class DeleteCompanyController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.headers;

    const deleteCompanyUseCase = container.resolve(DeleteCompanyUseCase);

    await deleteCompanyUseCase.execute(id as string);

    return response.status(204).send();
  }
}

export { DeleteCompanyController };
