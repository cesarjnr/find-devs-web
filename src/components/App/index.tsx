import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import '../../global.css';
import './index.css';
import DevForm from './DevForm';
import DevItem from './DevItem';
import { DevsTypes, Dev, DevFormData } from '../../store/ducks/devs/types';
import { ApplicationState } from '../../store/index';

const App = () => {
  const dispatch = useDispatch();
  const devs = useSelector((state: ApplicationState) => state.devs.data);

  useEffect(() => {
    dispatch({ type: DevsTypes.FETCH_REQUEST });
  }, [dispatch]);

  const addDev = async (formData: DevFormData) => {
    // const response = await api.post('/devs', formData);

    // setDevs([...devs, response.data]);
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
