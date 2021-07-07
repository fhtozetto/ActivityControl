import { Router } from 'express';

import { CreateCompanyController } from '@modules/accounts/useCases/createCompany/CreateCompnayController';

const createCompanyController = new CreateCompanyController();

const companyRoutes = Router();

companyRoutes.post('/', createCompanyController.handle);

export { companyRoutes };
