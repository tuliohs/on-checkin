import type { Place } from "@/models/Place";
import type { Pagination } from "./Pagination";
import type { HotelsResponse } from "./Hotel";

export default interface IDestinationsService {
    getPlaces(): Promise<Place[]>;
    getHotels(page: number, size: number,): Promise<Pagination<HotelsResponse>>;
}