import React from 'react';

interface ITableHeader {
  titleList: string[];
}

export default function TableHeader({ titleList }: ITableHeader) {
  return (
    <thead className="text-xs uppercase">
      <tr className="border-b py-3 border-gray-300">
        {titleList.map((title: string) => (
          <th
            key={title}
            className={` ${
              title.toLowerCase() === 'networks' ||
              title.toLowerCase() === 'price'
                ? 'max-sm:hidden'
                : ''
            } p-4`}
          >
            {title}
          </th>
        ))}
      </tr>
    </thead>
  );
}
