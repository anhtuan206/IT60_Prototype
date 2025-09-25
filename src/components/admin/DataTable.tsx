import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
interface DataTableProps {
  columns: Array<{
    header: string;
    accessor: string;
    render?: (value: any, row: any) => React.ReactNode;
  }>;
  data: Array<any>;
  onRowClick?: (row: any) => void;
  selectable?: boolean;
  selectedRows?: Array<any>;
  onSelectRow?: (row: any) => void;
  onSelectAll?: () => void;
  actions?: React.ReactNode;
  isLoading?: boolean;
}
const DataTable: React.FC<DataTableProps> = ({
  columns,
  data,
  onRowClick,
  selectable = false,
  selectedRows = [],
  onSelectRow,
  onSelectAll,
  actions,
  isLoading = false
}) => {
  return <div className="bg-white border border-gray-200 rounded-md overflow-hidden">
      {actions && <div className="p-4 border-b border-gray-200">{actions}</div>}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-accent-beige">
            <tr>
              {selectable && <th className="px-4 py-3 text-left">
                  <input type="checkbox" onChange={onSelectAll} />
                </th>}
              {columns.map((column, index) => <th key={index} className="px-4 py-3 text-left font-medium text-neutral-text">
                  {column.header}
                </th>)}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {isLoading ? <tr>
                <td colSpan={selectable ? columns.length + 1 : columns.length} className="px-4 py-3 text-center">
                  Đang tải...
                </td>
              </tr> : data.length === 0 ? <tr>
                <td colSpan={selectable ? columns.length + 1 : columns.length} className="px-4 py-8 text-center">
                  Không có dữ liệu
                </td>
              </tr> : data.map((row, rowIndex) => <tr key={rowIndex} className={`hover:bg-gray-50 ${onRowClick ? 'cursor-pointer' : ''}`} onClick={() => onRowClick && onRowClick(row)}>
                  {selectable && <td className="px-4 py-3">
                      <input type="checkbox" checked={selectedRows.includes(row)} onChange={() => onSelectRow && onSelectRow(row)} onClick={e => e.stopPropagation()} />
                    </td>}
                  {columns.map((column, colIndex) => <td key={colIndex} className="px-4 py-3">
                      {column.render ? column.render(row[column.accessor], row) : row[column.accessor]}
                    </td>)}
                </tr>)}
          </tbody>
        </table>
      </div>
      <div className="flex items-center justify-between px-4 py-3 border-t border-gray-200">
        <div className="text-sm text-gray-500">
          Hiển thị 1-{data.length} của {data.length} mục
        </div>
        <div className="flex items-center space-x-2">
          <button className="p-1 border border-gray-300 rounded hover:bg-gray-100">
            <ChevronLeft size={16} />
          </button>
          <span className="px-3 py-1 bg-primary-blue text-white rounded-md font-medium">1</span>
          <button className="p-1 border border-gray-300 rounded hover:bg-gray-100">
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>;
};
export default DataTable;