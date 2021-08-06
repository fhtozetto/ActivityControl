import { Router } from 'express';

import { CreatePositionController } from '@modules/accounts/useCases/createPosition/CreatePositionController';

const positionRoutes = Router();

const createPositionController = new CreatePositionController();

positionRoutes.post('/', createPositionController.handle);

export { positionRoutes };
