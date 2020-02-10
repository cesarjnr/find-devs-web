import React, { useState, useEffect } from 'react';

import '../../global.css';
import './index.css';
import api from '../../services/api';
import DevForm from './DevForm';
import DevItem from './DevItem';
import { DevInterface, DevFormDataInterface } from '../../interfaces/Dev';

const App = () => {
  const [devs, setDevs] = useState<DevInterface[]>([]);

  useEffect(() => {
    async function fetchDevs() {
      const response = await api.get('/devs');

      setDevs(response.data);
    }

    fetchDevs();
  });

  const addDev = async (formData: DevFormDataInterface) => {
    const response = await api.post('/devs', formData);

    setDevs([...devs, response.data]);
  };

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm parentHandleSubmit={addDev} />
      </aside>

      <main>
        <ul>
          {devs.map(dev => (
            <DevItem key={dev._id} dev={dev} />
          ))}
        </ul>
      </main>
    </div>
  );
};

export default App;
