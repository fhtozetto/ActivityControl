import { Router } from 'express';

import { CreateSectorController } from '@modules/tasks/useCases/createSector/CreateSectorController';

const sectorRoutes = Router();

const createSectorController = new CreateSectorController();

sectorRoutes.post('/', createSectorController.handle);

export { sectorRoutes };
