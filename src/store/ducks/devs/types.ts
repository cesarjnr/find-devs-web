// Action Types
export enum DevsTypes {
    FETCH_REQUEST = '@devs/FETCH_REQUEST',
    FETCH_SUCCESS = '@devs/FETCH_SUCCESS',
    FETCH_FAILURE = '@devs/FETCH_FAILURE'
}

// Data Types
export interface DevInterface {
    _id: string;
    github_username: string;
    avatar_url: string;
    bio: string;
    techs: string[];
    location: {
      coordinates: [number, number];
      _id: string;
      type: 'Point'
    }
}

export interface DevFormDataInterface {
    github_username: string;
    techs: string;
    latitude: string;
    longitude: string;
}

// State Type
export interface DevsStateInterface {
    readonly data: DevInterface[];
    readonly loading: boolean;
    readonly error: boolean;
}
