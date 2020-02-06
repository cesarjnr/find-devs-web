import React, { useState, useEffect } from 'react';

import '../../global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

const App = () => {
  console.log('Renderizei');
  const [githubUsername, setGithubUsername] = useState('');
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

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <label htmlFor="github_username">
            Usuário do Github
            <input
              name="github_username"
              id="github_username"
              value={githubUsername}
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
          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/28472875?s=460&v=4" alt="avatar" />
              <div className="user-info">
                <strong>César Júnior</strong>
                <span>Node.js, ReactJS, React Native</span>
              </div>
            </header>
            <p>
              Software Developer (Node.js / ReactJS) at Grupo Unicad.
            </p>
            <a href="https://github.com/cesarjnr">Acessar perfil no Github</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/28472875?s=460&v=4" alt="avatar" />
              <div className="user-info">
                <strong>César Júnior</strong>
                <span>Node.js, ReactJS, React Native</span>
              </div>
            </header>
            <p>
              Software Developer (Node.js / ReactJS) at Grupo Unicad.
            </p>
            <a href="https://github.com/cesarjnr">Acessar perfil no Github</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/28472875?s=460&v=4" alt="avatar" />
              <div className="user-info">
                <strong>César Júnior</strong>
                <span>Node.js, ReactJS, React Native</span>
              </div>
            </header>
            <p>
              Software Developer (Node.js / ReactJS) at Grupo Unicad.
            </p>
            <a href="https://github.com/cesarjnr">Acessar perfil no Github</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/28472875?s=460&v=4" alt="avatar" />
              <div className="user-info">
                <strong>César Júnior</strong>
                <span>Node.js, ReactJS, React Native</span>
              </div>
            </header>
            <p>
              Software Developer (Node.js / ReactJS) at Grupo Unicad.
            </p>
            <a href="https://github.com/cesarjnr">Acessar perfil no Github</a>
          </li>
        </ul>
      </main>
    </div>
  );
};

export default App;
