import { container } from 'tsyringe';

import '@shared/container/providers';
import { SectorsRepository } from '@modules/tasks/infra/typeorm/repositories/SectorsRepository';
import { ISectorsRepository } from '@modules/tasks/repositories/ISectorsRepository';

container.registerSingleton<ISectorsRepository>(
  'SectorsRepository',
  SectorsRepository,
);
