import React from 'react';

interface ITableHeader {
  titleList: string[];
}

export default function TableHeader({ titleList }: ITableHeader) {
  return (
    <thead className="text-xs uppercase text-gray-400 dark:border-gray-500">
      <tr className="border-b py-3 dark:border-gray-500">
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
