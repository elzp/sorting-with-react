import React, { useState } from 'react';
import Row from './Row';
export default function () {
  let previousdata = [
    { subject: 'Fundamenty języka JavaScript', name: 'Adam', time: 10129 },
    { subject: 'Przeglądarka bez tajemnic', name: 'Przemek', time: 19393 },
    { subject: 'W świecie frameworków', name: 'Marcin', time: 14002 },
  ];

  function sortByTime(thisdata, type) {
    let newData = [...thisdata];
    switch (type) {
      case true: //tobig
        newData.sort((a, b) => {
          return a.time - b.time;
        });
        break;
      case false: //tosmall
        newData.sort((a, b) => {
          return b.time - a.time;
        });
        break;
      default:
        newData.sort((a, b) => {
          return a.time - b.time;
        });
        break;
    }
    return newData;
  }

  const mofifiedData = sortByTime(previousdata);

  const [data, changeData] = useState(mofifiedData);
  const [direction, changeDirection] = useState(true);

  let icon = direction ? (
    <i class="fas fa-caret-down"></i>
  ) : (
    <i class="fa fa-caret-up"></i>
  );
  return (
    <table class="table-auto bg-white rounded-md overflow-hidden shadow-xl">
      <thead>
        <tr>
          <th class="px-4 py-2">Moduł</th>
          <th class="px-4 py-2">Autor</th>
          <th
            class="px-4 py-2"
            onClick={() => {
              changeDirection((prev) => !prev);
              changeData(sortByTime(data, direction));
            }}
          >
            <a class="hover:text-orange-600" href="#">
              {icon}
              Czas trwania
              {JSON.stringifydirection}
            </a>
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => {
          return <Row item={item} key={item.time} />;
        })}
      </tbody>
    </table>
  );
}
