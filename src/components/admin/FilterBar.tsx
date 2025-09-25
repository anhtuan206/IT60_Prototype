import React from 'react';
import { Search, Filter } from 'lucide-react';
interface FilterBarProps {
  children: React.ReactNode;
  onSearch?: (query: string) => void;
  searchPlaceholder?: string;
}
const FilterBar: React.FC<FilterBarProps> = ({
  children,
  onSearch,
  searchPlaceholder = 'Tìm kiếm...'
}) => {
  return <div className="bg-white p-4 rounded-md border border-gray-200 mb-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="relative">
          <input type="text" placeholder={searchPlaceholder} className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full md:w-64" onChange={e => onSearch && onSearch(e.target.value)} />
          <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
        <div className="flex items-center flex-wrap gap-3">
          <div className="flex items-center">
            <Filter size={16} className="mr-2 text-gray-500" />
            <span className="text-sm text-gray-500">Bộ lọc:</span>
          </div>
          {children}
        </div>
      </div>
    </div>;
};
export default FilterBar;