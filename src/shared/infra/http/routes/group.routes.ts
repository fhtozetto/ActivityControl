import { Router } from 'express';

import { CreateGroupController } from '@modules/accounts/useCases/createGroup/CreateGroupController';

const groupRoutes = Router();

const createGroupController = new CreateGroupController();

groupRoutes.post('', createGroupController.handle);

export { groupRoutes };
