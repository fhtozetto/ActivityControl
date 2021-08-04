import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdateCompanyUseCase } from './UpdateCompanyUseCase';

class UpdateCompanyController {
  async handler(request: Request, response: Response): Promise<Response> {
    const { id, group_id, code_name, name, cnpj } = request.body;

    const updateCompanyUseCase = container.resolve(UpdateCompanyUseCase);

    await updateCompanyUseCase.execute({
      id,
      group_id,
      code_name,
      name,
      cnpj,
    });

    return response.status(204).send();
  }
}

export { UpdateCompanyController };
