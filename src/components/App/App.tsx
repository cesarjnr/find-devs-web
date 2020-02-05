import React from 'react';

import '../../global.css';

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
            Latitude
            <input name="longitude" id="longitude" required />
          </label>
        </div>

        <button type="submit">Salvar</button>
      </form>
    </aside>
  </div>
);

export default App;
