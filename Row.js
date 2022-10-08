import React from 'react';

export default function Row(props) {
  const { subject, name, time } = props.item;

  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time - hours * 3600) / 60);
  const seconds = time - hours * 3600 - minutes * 60;
  const formatedTime = `${hours}:${minutes}:${seconds}`;
  return (
    <>
      <tr>
        <td class="border px-4 py-2">{subject}</td>
        <td class="border px-4 py-2">{name}</td>
        <td class="border px-4 py-2">{formatedTime}</td>
      </tr>
    </>
  );
}
