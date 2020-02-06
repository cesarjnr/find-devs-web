import React from 'react';

import '../../global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

const App = () => (
  <div id="app">
    <aside>
      <strong>Cadastrar</strong>
      <form>
        <label htmlFor="github_username">
          Usuário do Github
          <input name="github_username" id="github_username" required />
        </label>

        <label htmlFor="techs">
          Tecnologias
          <input name="techs" id="techs" required />
        </label>

        <div className="input-group">
          <label htmlFor="latitude">
            Latitude
            <input name="latitude" id="latitude" required />
          </label>

          <label htmlFor="longitude">
            Longitude
            <input name="longitude" id="longitude" required />
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

export default App;
