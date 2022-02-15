import React, { useContext } from 'react';
import AppContext from '../contexts/AppContext';
import TRow from './TRow';

function TBody(): any {
  const { ctx } = useContext(AppContext);
  return (
    <tbody>
      {ctx.meteors &&
        ctx.meteors.map((meteor: any) => (
          <TRow key={meteor.id} meteor={meteor} />
        ))}
    </tbody>
  );
}

export default TBody;
