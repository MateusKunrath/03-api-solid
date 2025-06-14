import { expect, describe, it, beforeEach } from 'vitest'
import { InMemoryGymsRepository } from '@/repositories/in-memory/in-memory-gyms-repository'
import { FetchNearbyGymsUseCase } from './fetch-nearby-gyms'

let gymsRepository: InMemoryGymsRepository
let sut: FetchNearbyGymsUseCase

describe('Fetch User Check-Ins History Use Case', async () => {
  beforeEach(async () => {
    gymsRepository = new InMemoryGymsRepository()
    sut = new FetchNearbyGymsUseCase(gymsRepository)
  })

  it('should be able to fetch nearby gyms', async () => {
    await gymsRepository.create({
      name: 'Near Gym',
      description: null,
      phone: null,
      latitude: -29.5443029,
      longitude: -51.4214456,
    })

    await gymsRepository.create({
      name: 'Far Gym',
      description: 'Só tem uma',
      phone: null,
      latitude: -29.5913524,
      longitude: -51.0814878,
    })

    const { gyms } = await sut.execute({
      userLatitude: -29.5443029,
      userLongitude: -51.4214456,
    })

    expect(gyms).toHaveLength(1)
    expect(gyms).toEqual([expect.objectContaining({ name: 'Near Gym' })])
  })
})
