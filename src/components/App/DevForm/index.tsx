import React, { useState, useEffect, FormEvent } from 'react';

import './styles.css';
import { DevFormData } from '../../../store/ducks/devs/types';

interface Props {
    parentHandleSubmit(formData: DevFormData): Promise<void>;
}

const DevForm = ({ parentHandleSubmit }: Props) => {
  const [github_username, setGithubUsername] = useState('');
  const [techs, setTechs] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => {
        setLatitude(position.coords.latitude.toString());
        setLongitude(position.coords.longitude.toString());
      },
      err => {
        console.log(err);
      },
      {
        timeout: 30000,
      },
    );
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    await parentHandleSubmit({
      github_username,
      techs,
      latitude,
      longitude,
    });

    setGithubUsername('');
    setTechs('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="github_username">
        Usuário do Github
        <input
          name="github_username"
          id="github_username"
          value={github_username}
          onChange={e => setGithubUsername(e.target.value)}
          required
        />
      </label>

      <label htmlFor="techs">
        Tecnologias
        <input
          name="techs"
          id="techs"
          value={techs}
          onChange={e => setTechs(e.target.value)}
          required
        />
      </label>

      <div className="input-group">
        <label htmlFor="latitude">
          Latitude
          <input
            type="number"
            name="latitude"
            id="latitude"
            value={latitude}
            onChange={e => setLatitude(e.target.value)}
            required
          />
        </label>

        <label htmlFor="longitude">
          Longitude
          <input
            type="number"
            name="longitude"
            id="longitude"
            value={longitude}
            onChange={e => setLongitude(e.target.value)}
            required
          />
        </label>
      </div>

      <button type="submit">Salvar</button>
    </form>
  );
};

export default DevForm;
