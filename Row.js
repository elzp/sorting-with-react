import React from 'react';

export default function Row(props) {
  const { subject, name, time } = props.item;

  return (
    <>
      <tr>
        <td class="border px-4 py-2">{subject}</td>
        <td class="border px-4 py-2">{name}</td>
        <td class="border px-4 py-2">{time}</td>
      </tr>
    </>
  );
}
