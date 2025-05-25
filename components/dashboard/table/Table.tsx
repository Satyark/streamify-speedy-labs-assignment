import React from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { StreamData } from '@/lib/types';
import { flexRender, getPaginationRowModel, getSortedRowModel, useReactTable } from '@tanstack/react-table';
import { getCoreRowModel } from '@tanstack/react-table';
import { columns } from './columns';
import { Button } from '@/components/ui/button';
import { ChevronUp } from 'lucide-react';
import { ChevronDown } from 'lucide-react';

const TableComponent = ({ data }: { data: StreamData[] }) => {
    
    const table = useReactTable({
        data: data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        initialState: {
          pagination: {
            pageSize: 5,
          },
        },
      });

  return (
    <div>
    <div className="rounded-md border">
    <Table>
  <TableHeader>
  {table.getHeaderGroups().map((headerGroup) => (
    <TableRow key={headerGroup.id}>
        {headerGroup.headers.map((header) => (
            // {header.isPlaceholder ? null : (
                <TableHead key={header.id}
                className={`text-start p-4 cursor-pointer select-none ${
                    ['dateStreamed', 'location'].includes(header.column.id)
                    ? 'hidden md:table-cell'
                    : ''
                }`}
                onClick={header.column.getToggleSortingHandler()}
                >
                <div className="flex items-center gap-1">
                    {flexRender(header.column.columnDef.header, header.getContext())}
                    {header.column.getIsSorted() === "asc" && <ChevronUp className="h-4 w-4" />}
                    {header.column.getIsSorted() === "desc" && <ChevronDown className="h-4 w-4" />}
                </div>
                </TableHead>

            //   )}
        ))}
    </TableRow>
  ))}

  </TableHeader>
  <TableBody>
    {table.getRowModel().rows.map((row) => (
        <TableRow key={row.id}>
            {row.getVisibleCells().map((cell) => (
                <TableCell
                className={`text-start p-4 ${['dateStreamed', 'location'].includes(
                  cell.column.id
                ) ? 'hidden md:table-cell' : ''}`}
                key={cell.id}
              >
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </TableCell>
            ))}
        </TableRow>
    ))}
  </TableBody>
</Table>
</div>
<div className="flex justify-between mt-4">
        <Button 
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}>
            Previous
        </Button>

        <span className="text-sm text-muted-foreground">
          Page {table.getState().pagination.pageIndex + 1} of{" "}
          {table.getPageCount()}
        </span>
        <Button 
            variant="outline"
            size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}>
            Next
        </Button>
      </div>
      </div>
  )
}

export default TableComponent;