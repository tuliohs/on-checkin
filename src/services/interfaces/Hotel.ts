import type { Hotel } from "@/models/Hotel";

export interface HotelsResponse {
    hotels: Hotel[],
    placeId: number
}
