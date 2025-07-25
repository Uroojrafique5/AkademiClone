import React from "react";
import { FiTrendingUp } from "react-icons/fi";

const PaymentHistoryItem = ({ id, date, amount, status }) => {
  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "complete":
        return "text-green-500";
      case "pending":
        return "text-yellow-500";
      case "canceled":
        return "text-red-500";
      default:
        return "text-gray-500";
    }
  };

  return (
    <div className="flex items-center justify-between py-4 border-b border-gray-200">
      <div className="flex items-center">
        <div className="w-10 h-10 flex items-center justify-center bg-red-100 rounded-full mr-4">
          <FiTrendingUp className="text-red-500" />
        </div>
        <div>
          <p className="font-semibold text-gray-800">{id}</p>
          <p className="text-sm text-gray-500">{date}</p>
        </div>
      </div>
      <p className="font-semibold text-gray-800">{amount}</p>
      <p className={`font-semibold ${getStatusColor(status)}`}>{status}</p>
    </div>
  );
};

export default PaymentHistoryItem;
