import React from 'react';
import Row from './Row';
export default function () {
  let data = [
    { subject: 'Fundamenty języka JavaScript', name: 'Adam', time: 10129 },
    { subject: 'Przeglądarka bez tajemnic', name: 'Przemek', time: 19393 },
    { subject: 'W świecie frameworków', name: 'Marcin', time: 14002 },
  ];
  return (
    <table class="table-auto bg-white rounded-md overflow-hidden shadow-xl">
      <thead>
        <tr>
          <th class="px-4 py-2">Moduł</th>
          <th class="px-4 py-2">Autor</th>
          <th class="px-4 py-2">
            <a class="hover:text-orange-600" href="#">
              <i class="fas fa-caret-down"></i> Czas trwania
            </a>
          </th>
        </tr>
      </thead>
      <tbody>
        <Row />
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
