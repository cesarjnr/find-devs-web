import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import '../../global.css';
import './styles.css';
import DevForm from './DevForm';
import DevItem from './DevItem';
import { DevsTypes, DevFormData } from '../../store/ducks/devs/types';
import { ApplicationState } from '../../store/index';

const Home = () => {
  const dispatch = useDispatch();
  const devs = useSelector((state: ApplicationState) => state.devs.data);

  useEffect(() => {
    dispatch({ type: DevsTypes.FETCH_REQUEST });
  }, [dispatch]);

  const addDev = async (formData: DevFormData) => {
    dispatch({
      type: DevsTypes.STORE_REQUEST,
      payload: {
        formData,
      },
    });
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

export default Home;
