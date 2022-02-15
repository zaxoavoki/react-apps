import React, { useContext } from 'react';

import { updateMeteor } from '../../api/meteors';
import Fallen from '../icons/Fallen';
import Star from '../icons/Star';
import AppContext from '../contexts/AppContext';

type Props = {
  meteor: any;
};

function TRow({ meteor }: Props): any {
  const { setCtx } = useContext(AppContext);

  function saveToImportant(id: string, important: boolean): void {
    updateMeteor(id, { important })
      .then(() => {
        setCtx(prev => {
          const idx: number = prev.meteors.findIndex((e: any) => e.id === id);
          const meteors: any = [...prev.meteors];
          meteors[idx].important = !meteors[idx].important;
          return { ...prev, meteors };
        });
      })
      .catch(err => console.log(err));
  }

  return (
    <tr>
      <td className="td-date">
        {new Date(meteor.date).toLocaleDateString('ru-RU')}
      </td>
      <td className="td-name">{meteor.name}</td>
      <td className="td-mass">
        {(+meteor.mass).toLocaleString('en-US', {
          minimumFractionDigits: 3,
        })}
      </td>
      <td
        className={`td-fell text-center h4 bg-${
          meteor.fall === 'Found' ? 'lightgreen' : 'pink'
        }`}
      >
        <Fallen fallen={meteor.fall === 'Found'} />
      </td>
      <td className="td-location">{`${meteor.latitude}, ${meteor.longitude}`}</td>
      <td
        className="td-important text-center text-warning"
        onClick={(): void => {
          saveToImportant(meteor.id, !meteor.important);
        }}
      >
        <Star filled={meteor.important} />
      </td>
    </tr>
  );
}

export default TRow;
