import { expect, describe, it, beforeEach } from 'vitest'
import { CreateGymUseCase } from './create-gym'
import { InMemoryGymsRepository } from '@/repositories/in-memory/in-memory-gyms-repository'

let sut: CreateGymUseCase

describe('Create Gym Use Case', async () => {
  beforeEach(() => {
    sut = new CreateGymUseCase(new InMemoryGymsRepository())
  })

  it('should be able to create gym', async () => {
    const { gym } = await sut.execute({
      name: 'Academia do Povo',
      description: 'Só tem uma',
      phone: null,
      latitude: -29.5443029,
      longitude: -51.4214456,
    })

    expect(gym.id).toEqual(expect.any(String))
  })
})
