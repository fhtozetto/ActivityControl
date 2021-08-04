import { Router } from 'express';

import { companyRoutes } from './company.routes';
import { departmentRoutes } from './department.routes';
import { groupRoutes } from './group.routes';

const router = Router();

router.use('/company', companyRoutes);
router.use('/group', groupRoutes);
router.use('/departments', departmentRoutes);

export { router };
