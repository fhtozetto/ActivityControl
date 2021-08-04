import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateCompanyUseCase } from './CreateCompanyUseCase';

class CreateCompanyController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id, group_id, name, code_name, cnpj } = request.body;

    const createCompanyUseCase = container.resolve(CreateCompanyUseCase);

    const company = await createCompanyUseCase.execute({
      id,
      group_id,
      name,
      code_name,
      cnpj,
    });

    return response.status(201).json(company);
  }
}

export { CreateCompanyController };
