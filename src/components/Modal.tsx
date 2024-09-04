import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden max-w-md w-full">
        <div className="flex items-center justify-between p-2 bg-gray-200 dark:bg-gray-700">
          <div className="flex items-center space-x-2">
            <div
              className="w-3 h-3 rounded-full bg-red-500 cursor-pointer"
              onClick={onClose}
            ></div>
            <div className="w-3 h-3"></div>
            <div className="w-3 h-3"></div>
          </div>
          <div className="text-sm font-medium text-gray-600 dark:text-gray-300">
            Close Portfolio
          </div>
          <div className="w-3 h-3"></div>
        </div>
        <div className="p-6">
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Are you sure you want to close my portfolio?
          </p>
          <div className="flex justify-end space-x-4">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded hover:bg-gray-400 dark:hover:bg-gray-500 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={onConfirm}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
            >
              Close Portfolio
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
