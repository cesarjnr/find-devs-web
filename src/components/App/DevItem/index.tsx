import React from 'react';

import './styles.css';
import { DevInterface } from '../../../store/ducks/devs/types';

interface Props {
    dev: DevInterface
}

const DevItem = ({ dev }: Props) => (
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
);

export default DevItem;
