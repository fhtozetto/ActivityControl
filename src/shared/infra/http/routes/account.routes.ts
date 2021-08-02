import { Router } from 'express';

import { CreateAccountController } from '@modules/accounts/useCases/createAccount/CreateAccountController';
import { DeleteAccountController } from '@modules/accounts/useCases/deleteAccount/DeleteAccountController';
import { UpdateAccountController } from '@modules/accounts/useCases/updateAccount/UpdateAccountController';

const accountRoutes = Router();

const createAccountController = new CreateAccountController();
const updateAccountController = new UpdateAccountController();
const deleteAccountController = new DeleteAccountController();

accountRoutes.post('/', createAccountController.handle);
accountRoutes.put('/', updateAccountController.handle);
accountRoutes.delete('/', deleteAccountController.handle);

export { accountRoutes };
