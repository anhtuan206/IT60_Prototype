import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
interface BreadcrumbItem {
  label: string;
  path: string;
}
interface AdminBreadcrumbsProps {
  items: BreadcrumbItem[];
}
const AdminBreadcrumbs: React.FC<AdminBreadcrumbsProps> = ({
  items
}) => {
  return <nav aria-label="breadcrumb">
      <ol className="flex items-center space-x-2">
        {items.map((item, index) => <Fragment key={index}>
            {index > 0 && <ChevronRight size={16} className="text-gray-400" />}
            {index === items.length - 1 ? <li className="text-gray-500" aria-current="page">
                {item.label}
              </li> : <li>
                <Link to={item.path} className="text-gray-700 hover:underline">
                  {item.label}
                </Link>
              </li>}
          </Fragment>)}
      </ol>
    </nav>;
};
export default AdminBreadcrumbs;