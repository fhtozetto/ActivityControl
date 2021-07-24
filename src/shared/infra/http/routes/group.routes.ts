import { Router } from 'express';

import { CreateGroupController } from '@modules/accounts/useCases/createGroup/CreateGroupController';
import { UpdateGroupController } from '@modules/accounts/useCases/updateGroup/UpdateGroupController';

const groupRoutes = Router();

const createGroupController = new CreateGroupController();
const updateGroupController = new UpdateGroupController();

groupRoutes.post('', createGroupController.handle);
groupRoutes.put('', updateGroupController.handle);

export { groupRoutes };
