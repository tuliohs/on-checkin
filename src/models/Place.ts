interface State {
    name: string;
    shortname: string;
}

export interface Place {
    name: string;
    state: State;
    placeId: number;
}
