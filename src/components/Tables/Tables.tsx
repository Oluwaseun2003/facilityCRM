/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { rankItem } from "@tanstack/match-sorter-utils";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  type ColumnDef,
  type FilterFn,
} from "@tanstack/react-table";
import {
  useRef,
  useEffect,
  type ReactNode,
  type HTMLProps,
  type Dispatch,
  type SetStateAction,
} from "react";
import {
  TbSquareRoundedChevronLeftFilled,
  TbSquareRoundedChevronRightFilled,
  TbSquareRoundedChevronsLeftFilled,
  TbSquareRoundedChevronsRightFilled,
} from "react-icons/tb";
import { GoInbox } from "react-icons/go";
import { MdError } from "react-icons/md";
import { v4 } from "uuid";
import { clsx } from "clsx";
import React from "react";
import { ClipLoader } from "react-spinners";

interface Props<T> extends Partial<IPaginationControls & ISearchQuery> {
  data: T[];
  columns: Array<ColumnDef<T>>;
  children?: ReactNode;
  onRowClick?: (rowData: T) => void;
  error?: boolean;
  loading?: boolean;
  rowSelection?: Record<string, boolean>;
  setRowSelection?: Dispatch<SetStateAction<Record<string, boolean>>>;
}

interface IPaginationControls {
  gotoPage: (pageIndex: number) => void;
  previousPage: () => void;
  nextPage: () => void;
  setPageSize: (pageSize: number) => void;
  canPreviousPage: boolean;
  canNextPage: boolean;
  currentPage: number;
  totalPages: number;
  pageSize: number;
}

interface ISearchQuery {
  placeholder: string;
}

export const fuzzyFilter: FilterFn<any> = (row, columnId, value, addMeta) => {
  const itemRank = rankItem(row.getValue(columnId), value);
  addMeta({
    itemRank,
  });

  return itemRank.passed;
};

export default function Table<T>({
  data,
  columns,
  children,
  onRowClick = () => {},
  error,
  loading,
  rowSelection,
  setRowSelection,
  placeholder,
  ...paginationControls
}: Props<T>): JSX.Element {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    state: {
      rowSelection,
    },
    onRowSelectionChange: setRowSelection,
    filterFns: {
      fuzzy: fuzzyFilter,
    },
  });

  return (
    <div className="flex-1 m-10 rounded-md bg-white p-2 sm:p-4">
      {children}
      {loading && (
        <div className="flex justify-center items-center">
          <ClipLoader size={34} color="#0173B1" />
        </div>
      )}
      {data.length === 0 && !error && !loading && (
        <div className="flex h-5/6 w-full flex-col items-center justify-center gap-1">
          <GoInbox className="text-3xl" />
          <span className="">No data</span>
        </div>
      )}
      {error && (
        <div className="flex h-5/6 w-full flex-col items-center justify-center gap-1">
          <MdError className="text-3xl" />
          <span className="">An error occurred</span>
        </div>
      )}
      {data.length > 0 && (
        <div className="overflow-x-auto pb-4 rounded-lg ">
          <table
            role="table"
            className="w-full border border-[#00000033] border-collapse ">
            <thead className="bg-[#0284C7] text-white">
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={v4()}>
                  {headerGroup.headers.map((header) => (
                    <th
                      key={v4()}
                      className="whitespace-nowrap px-2 py-3 text-center text-[12px] capitalize text-white font-bold ">
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody className="p-5">
              {table.getRowModel().rows.map((row) => (
                <tr
                  key={v4()}
                  onClick={() => {
                    onRowClick(row.original);
                  }}
                  className={clsx(
                    "cursor-pointer duration-300 hover:bg-blue-50 border border-[#00000033]"
                  )}>
                  {row.getVisibleCells().map((cell) => (
                    <td
                      key={v4()}
                      className="whitespace-nowrap px-2 py-3 text-center text-[12px]  capitlize text-[##000000CC] font-medium">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {paginationControls.nextPage &&
        paginationControls.previousPage &&
        !(data.length < (paginationControls.pageSize ?? 0)) && (
          <PaginationControls {...paginationControls} />
        )}
    </div>
  );
}

export function IndeterminateCheckbox({
  indeterminate,
  className = "",
  ...rest
}: { indeterminate?: boolean } & HTMLProps<HTMLInputElement>): JSX.Element {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (typeof indeterminate === "boolean" && ref.current) {
      ref.current.indeterminate = !rest.checked && indeterminate;
    }
  }, [ref, indeterminate]);

  return (
    <input
      type="checkbox"
      ref={ref}
      className={className + " cursor-pointer"}
      {...rest}
    />
  );
}

export function PaginationControls({
  gotoPage = () => {},
  previousPage = () => {},
  nextPage = () => {},
  setPageSize = () => {},
  pageSize = 10,
  currentPage = 1,
  totalPages = 1,
  canPreviousPage = false,
  canNextPage = false,
}: Partial<IPaginationControls>): JSX.Element {
  return (
    <form className="m-2 flex flex-wrap items-center justify-end gap-2">
      <button
        type="button"
        onClick={() => {
          gotoPage(1);
        }}
        disabled={!canPreviousPage}
        className="text-sky-600 disabled:cursor-not-allowed disabled:text-gray-600">
        <TbSquareRoundedChevronsLeftFilled className="h-6 w-6" />
      </button>
      <button
        type="button"
        onClick={previousPage}
        disabled={!canPreviousPage}
        className="text-sky-600 disabled:cursor-not-allowed disabled:text-gray-600">
        <TbSquareRoundedChevronLeftFilled className="h-6 w-6" />
      </button>
      <button
        type="button"
        onClick={nextPage}
        disabled={!canNextPage}
        className="text-sky-600 disabled:cursor-not-allowed disabled:text-gray-600">
        <TbSquareRoundedChevronRightFilled className="h-6 w-6" />
      </button>
      <button
        type="button"
        onClick={() => {
          gotoPage(totalPages);
        }}
        disabled={!canNextPage}
        className="text-sky-600 disabled:cursor-not-allowed disabled:text-gray-600">
        <TbSquareRoundedChevronsRightFilled className="h-6 w-6" />
      </button>
      <fieldset className="flex items-center">
        Page:
        <strong className="ml-2">
          {currentPage} of {totalPages}
        </strong>
      </fieldset>
      <fieldset className="ml-4 flex items-center gap-2">
        <label htmlFor="">Go to page:</label>
        <input
          type="number"
          defaultValue=""
          min={1}
          max={totalPages}
          onChange={(e) => {
            const page = +e.target.value;
            if (page < 1 && page > totalPages) return;
            gotoPage(page || 1);
          }}
          disabled={!canNextPage && !canPreviousPage}
          className="w-12 border px-2 py-1 disabled:cursor-not-allowed"
        />
      </fieldset>
      <fieldset className="ml-4 flex items-center gap-2">
        <label htmlFor="">Rows per page:</label>
        <select
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
          }}
          className="w-12 border px-2 py-1">
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              {pageSize}
            </option>
          ))}
        </select>
      </fieldset>
    </form>
  );
}
