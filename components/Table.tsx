import React from "react";

export default function Table({
  data,
}: {
  data: { id: number; title: string; text: string }[];
}) {
  return (
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <tbody>
        {data.map((item) => (
          <tr
            key={item.id}
            className="odd:bg-[#f3f3f3] odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200"
          >
            <td className="px-6 py-4">{item.title}</td>
            <td className="px-6 py-4">{item.text}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
