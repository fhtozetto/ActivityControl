import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { FindCompanyByCnpjUseCase } from './FindCompanyByCnpjUseCase';

class FindCompanyByCnpjController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { cnpj } = request.body;
    const findCompanyByCnpjUseCase = container.resolve(
      FindCompanyByCnpjUseCase,
    );

    const company = await findCompanyByCnpjUseCase.execute(cnpj);

    return response.status(201).json(company);
  }
}

export { FindCompanyByCnpjController };
