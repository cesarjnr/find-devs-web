/* eslint-disable no-extra-semi */
/* eslint-disable semi */
export default interface DevInterface {
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
