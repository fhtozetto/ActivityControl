import { Router } from 'express';

import { CreateCompanyController } from '@modules/accounts/useCases/createCompany/CreateCompnayController';
import { DeleteCompanyController } from '@modules/accounts/useCases/deleteCompany/DeleteCompanyController';
import { FindCompanyByCnpjController } from '@modules/accounts/useCases/findCompanyByCNPJ/FindCompanyByCnpjController';
import { UpdateCompanyController } from '@modules/accounts/useCases/updateCompany/UpdateCompanyController';

const createCompanyController = new CreateCompanyController();
const updateCompanyController = new UpdateCompanyController();
const deleteCompanyController = new DeleteCompanyController();
const findCompanyByCnpjController = new FindCompanyByCnpjController();

const companyRoutes = Router();

companyRoutes.post('/', createCompanyController.handle);
companyRoutes.put('/', updateCompanyController.handler);
companyRoutes.delete('/', deleteCompanyController.handle);
companyRoutes.get('/cnpj', findCompanyByCnpjController.handle);

export { companyRoutes };
