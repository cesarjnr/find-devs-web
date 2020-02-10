import React, { useState, useEffect, FormEvent } from 'react';

import api from '../../services/api';

import '../../global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

interface DevInterface {
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

const App = () => {
  const [devs, setDevs] = useState<DevInterface[]>([]);
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

  useEffect(() => {
    async function fetchDevs() {
      const response = await api.get('/devs');

      setDevs(response.data);
    }

    fetchDevs();
  });

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const response = await api.post('/devs', {
      github_username,
      techs,
      latitude,
      longitude,
    });

    setGithubUsername('');
    setTechs('');
    setDevs([...devs, response.data]);
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
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
      </aside>

      <main>
        <ul>
          {devs.map(dev => (
            <li className="dev-item">
              <header>
                <img src={dev.avatar_url} alt="avatar" />
                <div className="user-info">
                  <strong>{dev.github_username}</strong>
                  <span>{dev.techs.join(', ')}</span>
                </div>
              </header>
              <p>{dev.bio}</p>
              <a href={`https://github.com/${dev.github_username}`}>Acessar perfil no Github</a>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default App;
