/* eslint-disable no-extra-semi */
/* eslint-disable semi */
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
  };

export interface DevFormDataInterface {
  github_username: string;
  techs: string;
  latitude: string;
  longitude: string;
};
