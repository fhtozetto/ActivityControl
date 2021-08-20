import { Router } from 'express';

import { CreateCompanyController } from '@modules/accounts/useCases/createCompany/CreateCompnayController';
import { DeleteCompanyController } from '@modules/accounts/useCases/deleteCompany/DeleteCompanyController';
import { FindCompanyByCnpjController } from '@modules/accounts/useCases/findCompanyByCNPJ/FindCompanyByCnpjController';
import { UpdateCompanyController } from '@modules/accounts/useCases/updateCompany/UpdateCompanyController';

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const createCompanyController = new CreateCompanyController();
const updateCompanyController = new UpdateCompanyController();
const deleteCompanyController = new DeleteCompanyController();
const findCompanyByCnpjController = new FindCompanyByCnpjController();

const companiesRoutes = Router();

companiesRoutes.post('/', ensureAuthenticated, createCompanyController.handle);
companiesRoutes.put('/', ensureAuthenticated, updateCompanyController.handler);
companiesRoutes.delete(
  '/',
  ensureAuthenticated,
  deleteCompanyController.handle,
);
companiesRoutes.get(
  '/cnpj',
  ensureAuthenticated,
  findCompanyByCnpjController.handle,
);

export { companiesRoutes };
