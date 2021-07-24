import { Router } from 'express';

import { CreateAccountController } from '@modules/accounts/useCases/createAccount/CreateAccountController';
import { UpdateAccountController } from '@modules/accounts/useCases/updateAccount/UpdateAccountController';

const accountRoutes = Router();

const createAccountController = new CreateAccountController();
const updateAccountController = new UpdateAccountController();

accountRoutes.post('/', createAccountController.handle);
accountRoutes.put('/', updateAccountController.handle);

export { accountRoutes };
