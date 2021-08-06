import { container } from 'tsyringe';

import '@shared/container/providers';
import { CompaniesRepository } from '@modules/accounts/infra/typeorm/repositories/CompaniesRepository';
import { DepartmentsRepository } from '@modules/accounts/infra/typeorm/repositories/DepartmentsRepository';
import { GroupsRepository } from '@modules/accounts/infra/typeorm/repositories/GroupRepository';
import { PositionsRepository } from '@modules/accounts/infra/typeorm/repositories/PositionsRepository';
import { ICompaniesRepository } from '@modules/accounts/repositories/ICompaniesRepository';
import { IDepartmentsRepository } from '@modules/accounts/repositories/IDepartmentsRepository';
import { IGroupsRepository } from '@modules/accounts/repositories/IGroupRepository';
import { IPositionsRepository } from '@modules/accounts/repositories/IPositionsRepository';

container.registerSingleton<ICompaniesRepository>(
  'CompaniesRepository',
  CompaniesRepository,
);

container.registerSingleton<IGroupsRepository>(
  'GroupsRepository',
  GroupsRepository,
);

container.registerSingleton<IDepartmentsRepository>(
  'DepartmentsRepository',
  DepartmentsRepository,
);

container.registerSingleton<IPositionsRepository>(
  'PositionsRepository',
  PositionsRepository,
);
