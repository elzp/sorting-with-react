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
      case 'toBig':
        newData.sort((a, b) => {
          return a.time - b.time;
        });
        break;
      case 'toSmall':
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
  console.log(data);
  return (
    <table class="table-auto bg-white rounded-md overflow-hidden shadow-xl">
      <thead>
        <tr>
          <th class="px-4 py-2">Moduł</th>
          <th class="px-4 py-2">Autor</th>
          <th class="px-4 py-2">
            <a class="hover:text-orange-600" href="#">
              <i class="fas fa-caret-down"></i>
              Czas trwania
            </a>
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => {
          return <Row item={item} key={item.time} />;
        })}
        {/* <tr>
          <td class="border px-4 py-2">Fundamenty języka JavaScript</td>
          <td class="border px-4 py-2">Adam</td>
          <td class="border px-4 py-2">10129</td>
        </tr>
        <tr class="bg-gray-100">
          <td class="border px-4 py-2">Przeglądarka bez tajemnic</td>
          <td class="border px-4 py-2">Przemek</td>
          <td class="border px-4 py-2">19393</td>
        </tr>
        <tr>
          <td class="border px-4 py-2">W świecie frameworków</td>
          <td class="border px-4 py-2">Marcin</td>
          <td class="border px-4 py-2">14002</td>
        </tr> */}
      </tbody>
    </table>
  );
}
