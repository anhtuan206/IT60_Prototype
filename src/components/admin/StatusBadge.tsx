import React from 'react';
type StatusType = 'active' | 'draft' | 'pending' | 'paid' | 'shipped' | 'cancelled' | 'confirmed' | 'requested';
interface StatusBadgeProps {
  status: StatusType;
}
const StatusBadge: React.FC<StatusBadgeProps> = ({
  status
}) => {
  const getStatusStyles = (status: StatusType) => {
    switch (status) {
      case 'active':
      case 'paid':
      case 'confirmed':
        return 'bg-green-100 text-green-800';
      case 'draft':
      case 'pending':
      case 'requested':
        return 'bg-yellow-100 text-yellow-800';
      case 'shipped':
        return 'bg-blue-100 text-blue-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };
  const getStatusLabel = (status: StatusType) => {
    switch (status) {
      case 'active':
        return 'Hoạt động';
      case 'draft':
        return 'Bản nháp';
      case 'pending':
        return 'Đang chờ';
      case 'paid':
        return 'Đã thanh toán';
      case 'shipped':
        return 'Đã giao hàng';
      case 'cancelled':
        return 'Đã hủy';
      case 'confirmed':
        return 'Đã xác nhận';
      case 'requested':
        return 'Yêu cầu';
      default:
        return status;
    }
  };
  return <span className={`inline-block px-2 py-1 text-xs font-medium rounded ${getStatusStyles(status)}`}>
      {getStatusLabel(status)}
    </span>;
};
export default StatusBadge;