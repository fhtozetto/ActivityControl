import { container } from 'tsyringe';

import '@shared/container/providers';
import { CompaniesRepository } from '@modules/accounts/infra/typeorm/repositories/CompaniesRepository';
import { DepartmentsRepository } from '@modules/accounts/infra/typeorm/repositories/DepartmentsRepository';
import { GroupsRepository } from '@modules/accounts/infra/typeorm/repositories/GroupsRepository';
import { PositionsRepository } from '@modules/accounts/infra/typeorm/repositories/PositionsRepository';
import { UsersRepository } from '@modules/accounts/infra/typeorm/repositories/UsersRepository';
import { ICompaniesRepository } from '@modules/accounts/repositories/ICompaniesRepository';
import { IDepartmentsRepository } from '@modules/accounts/repositories/IDepartmentsRepository';
import { IGroupsRepository } from '@modules/accounts/repositories/IGroupsRepository';
import { IPositionsRepository } from '@modules/accounts/repositories/IPositionsRepository';
import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository';

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

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);
