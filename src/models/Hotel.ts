interface Amenity {
    key: string;
    label: string;
  }
  
  interface Address {
    street: string;
    number: string;
    district: string;
    city: string;
    state: string;
    country: string;
    zipCode: string | null;
    fullAddress: string;
  }
  
  export interface Hotel {
    id: number;
    favorite: boolean;
    name: string;
    description: string;
    stars: string;
    thumb: string;
    amenities: Amenity[];
    hasBreakFast: boolean;
    hasRefundableRoom: boolean;
    hasAgreement: boolean;
    nonRefundable: boolean | null;
    address: Address;
    images: string[];
    deals?: string[];
    roomsQuantity: number;
    price: number;
  }
  