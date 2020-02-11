import React, { useState, useEffect } from 'react';

import '../../global.css';
import './index.css';
import api from '../../services/api';
import DevForm from './DevForm';
import DevItem from './DevItem';
import { Dev, DevFormData } from '../../store/ducks/devs/types';

const App = () => {
  const [devs, setDevs] = useState<Dev[]>([]);

  useEffect(() => {
    async function fetchDevs() {
      const response = await api.get('/devs');

      setDevs(response.data);
    }

    fetchDevs();
  });

  const addDev = async (formData: DevFormData) => {
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
