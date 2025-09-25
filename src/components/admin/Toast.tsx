import React from 'react';
import { CheckCircle, XCircle, X } from 'lucide-react';
type ToastType = 'success' | 'error';
interface ToastProps {
  type: ToastType;
  message: string;
  onClose: () => void;
}
const Toast: React.FC<ToastProps> = ({ type, message, onClose }) => {
  const iconMap = {
    success: <CheckCircle size={20} className="text-green-600" />,
    error: <XCircle size={20} className="text-red-600" />,
  };

  const colorMap = {
    success: 'bg-green-50 border-green-400',
    error: 'bg-red-50 border-red-400',
  };

  return (
    <div className={`shadow-lg rounded-md p-4 flex items-center justify-between max-w-md border-l-4 ${colorMap[type]}`}>
      <div className="flex items-center space-x-3">
        {iconMap[type]}
        <p className="text-neutral-text">{message}</p>
      </div>
      <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
        <X size={18} />
      </button>
    </div>
  );
};
export default Toast;