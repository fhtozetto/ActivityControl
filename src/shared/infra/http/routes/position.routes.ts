import { Router } from 'express';

import { CreatePositionController } from '@modules/accounts/useCases/createPosition/CreatePositionController';
import { UpdatePositionController } from '@modules/accounts/useCases/updatePosition/UpdatePositionCotroller';

const positionRoutes = Router();

const createPositionController = new CreatePositionController();
const updatePositionController = new UpdatePositionController();

positionRoutes.post('/', createPositionController.handle);
positionRoutes.put('/', updatePositionController.handle);

export { positionRoutes };
