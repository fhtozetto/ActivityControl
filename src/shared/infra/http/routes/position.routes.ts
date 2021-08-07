import { Router } from 'express';

import { CreatePositionController } from '@modules/accounts/useCases/createPosition/CreatePositionController';
import { DeletePositionController } from '@modules/accounts/useCases/deletePosition/DeletePositionController';
import { UpdatePositionController } from '@modules/accounts/useCases/updatePosition/UpdatePositionCotroller';

const positionRoutes = Router();

const createPositionController = new CreatePositionController();
const updatePositionController = new UpdatePositionController();
const deletePositionController = new DeletePositionController();

positionRoutes.post('/', createPositionController.handle);
positionRoutes.put('/', updatePositionController.handle);
positionRoutes.delete('/', deletePositionController.handle);

export { positionRoutes };
