// Action Types
export enum DevsTypes {
    FETCH_REQUEST = '@devs/FETCH_REQUEST',
    FETCH_SUCCESS = '@devs/FETCH_SUCCESS',
    FETCH_FAILURE = '@devs/FETCH_FAILURE',
    STORE_REQUEST = '@devs/STORE_REQUEST',
    STORE_SUCCESS = '@devs/STORE_SUCCESS'
}

// Data Types
export interface Dev {
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

export interface DevFormData {
    github_username: string;
    techs: string;
    latitude: string;
    longitude: string;
}

// State Type
export interface DevsState {
    readonly data: Dev[];
    readonly loading: boolean;
    readonly error: boolean;
}
