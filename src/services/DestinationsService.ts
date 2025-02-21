import type { Place } from '@/models/Place';
import type IDestinationsService from './interfaces/IDestinationService'
import placesMock from './mocks/placesMock';
import type { Pagination } from './interfaces/Pagination';
import hotelsMock from './mocks/hotelsMock';
import type { HotelsResponse } from './interfaces/Hotel';

export default class DestinationsService implements IDestinationsService {
    private provider: 'api' | 'mock';
    constructor(provider: 'api' | 'mock') {
        this.provider = provider;
    }

    public async getPlaces(): Promise<Place[]> {
        if (this.provider === 'api') {
            throw new Error("Method not implemented.");

        }
        if (this.provider === 'mock') {
            return new Promise((resolve) => resolve(placesMock))
        }
        throw new Error("Provider not found");
    }

    public async getHotels(page: number, limit: number, city?: number): Promise<Pagination<HotelsResponse>> {
        if (this.provider === 'api') {
            throw new Error("Method not implemented.");

        }
        if (this.provider === 'mock') {
            let items = hotelsMock
            if (city) {
                items = items.filter(hotel => hotel.placeId === city)
            }
            const results: Pagination<HotelsResponse> = {
                items,
                limit: limit,
                page: page,
                total: items.length

            }
            return new Promise((resolve) => resolve(results))
        }
        throw new Error("Provider not found");
    }
}
