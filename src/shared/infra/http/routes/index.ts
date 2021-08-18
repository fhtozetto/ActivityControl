import { Router } from 'express';

import { authenticateRoutes } from './authenticate.routes';
import { companiesRoutes } from './companies.routes';
import { departmentsRoutes } from './departments.routes';
import { groupsRoutes } from './groups.routes';
import { positionsRoutes } from './positions.routes';
import { usersRoutes } from './users.routes';

const router = Router();

router.use('/companies', companiesRoutes);
router.use('/groups', groupsRoutes);
router.use('/departments', departmentsRoutes);
router.use('/positions', positionsRoutes);
router.use('/users', usersRoutes);
router.use(authenticateRoutes);

export { router };
