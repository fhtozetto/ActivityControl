import { SectorsRepositoryInMemory } from '@modules/tasks/repositories/in-Memory/SectorsRepositoryInMemory';

import { CreateSectorUseCase } from './CreateSectorUseCase';

let createSectorUseCase: CreateSectorUseCase;
let sectorsRepositoryInMemory: SectorsRepositoryInMemory;

describe('create sector', () => {
  beforeEach(() => {
    sectorsRepositoryInMemory = new SectorsRepositoryInMemory();
    createSectorUseCase = new CreateSectorUseCase(sectorsRepositoryInMemory);
  });

  it('should be able to create a new sector', async () => {
    const sector = {
      description: 'teste',
    };

    const newSector = await createSectorUseCase.execute({
      description: sector.description,
    });

    expect(newSector).toHaveProperty('id');
  });
});
