export type MapboxType = {
    id: string;
    properties: {
        full_address: string;
        name: string;
    }

}

export type CoffeeStoresType = {
    id: string;
    address: string;
    name: string;
    imgUrl: string;
    voting: number;
  }

export type PositionType = {
    coords: {
        latitude: number,
        longitude: number
    }
}

export type AirtableType = {
    id: string;
    recordId: string;
    fields: CoffeeStoresType
}