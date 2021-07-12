import { Router } from 'express';

import { CreateCompanyController } from '@modules/accounts/useCases/createCompany/CreateCompnayController';
import { FindCompanyByCnpjController } from '@modules/accounts/useCases/findCompanyByCNPJ/FindCompanyByCnpjController';

const createCompanyController = new CreateCompanyController();
const findCompanyByCnpjController = new FindCompanyByCnpjController();

const companyRoutes = Router();

companyRoutes.post('/', createCompanyController.handle);
companyRoutes.get('/cnpj', findCompanyByCnpjController.handle);

export { companyRoutes };
