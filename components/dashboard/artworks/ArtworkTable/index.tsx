'use client';

import { TArtworkListItemModel } from '@/lib/models/artwork.model';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';

type TProps = { data: TArtworkListItemModel[] };

const ArtworkTable = ({ data }: TProps) => {
  const columnHelper = createColumnHelper<TArtworkListItemModel>();

  const columns = [
    columnHelper.accessor(row => row.artist, {
      id: 'artist',
      cell: info => <i>{info.getValue()}</i>,
      header: () => <span>Artist</span>,
      footer: () => <span>Artist</span>,
    }),
    columnHelper.accessor(row => row.title, {
      id: 'title',
      cell: info => <i>{info.getValue()}</i>,
      header: () => <span>Title</span>,
      footer: () => <span>Title</span>,
    }),
    columnHelper.accessor(row => row.edition, {
      id: 'edition',
      cell: info => <i>{info.getValue()}</i>,
      header: () => <span>Editions</span>,
      footer: () => <span>Editions</span>,
    }),
    columnHelper.accessor(row => row.price, {
      id: 'price',
      cell: info => <i>{info.getValue()}</i>,
      header: () => <span>Price</span>,
      footer: () => <span>Price</span>,
    }),
    columnHelper.accessor(row => row.currency, {
      id: 'currency',
      cell: info => <i>{info.getValue()}</i>,
      header: () => <span>Currency</span>,
      footer: () => <span>Currency</span>,
    }),
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <>
      <table className="text-sm">
        <thead className="bg-gray-300">
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className="border-b">
          {table.getRowModel().rows.map(row => (
            <tr className="border-b border-b-gray-300" key={row.id}>
              {row.getVisibleCells().map(cell => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        <tfoot className="text-gray-300">
          {table.getFooterGroups().map(footerGroup => (
            <tr key={footerGroup.id}>
              {footerGroup.headers.map(header => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.footer,
                        header.getContext(),
                      )}
                </th>
              ))}
            </tr>
          ))}
        </tfoot>
      </table>
    </>
  );
};

export default ArtworkTable;
