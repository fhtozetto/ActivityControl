import { Router } from 'express';

import { accountRoutes } from './account.routes';
import { companyRoutes } from './company.routes';
import { departmentRoutes } from './department.routes';
import { groupRoutes } from './group.routes';

const router = Router();

router.use('/company', companyRoutes);
router.use('/account', accountRoutes);
router.use('/group', groupRoutes);
router.use('/departments', departmentRoutes);

export { router };
