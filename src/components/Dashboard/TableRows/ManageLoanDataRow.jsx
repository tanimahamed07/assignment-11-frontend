import React from "react";

const ManageLoanDataRow = ({ loan }) => {
  const handleUpdate = () => {
    console.log("update btn");
  };
  const handleDelete = () => {

    console.log("handle delete");
  };
  console.log(loan);
  return (
    <tr className="border-b border-gray-200">
      {/* Image */}
      <td className="px-5 py-4 bg-white text-sm text-center">
        <img
          src={loan.image}
          alt={loan.title}
          className="w-12 h-12 object-cover rounded"
        />
      </td>

      {/* Title */}
      <td className="px-5 py-4 bg-white text-sm font-medium text-center">
        <p className="">{loan.title}</p>
      </td>

      {/* Interest */}
      <td className="px-5 py-4 bg-white text-sm text-center">
        {loan.interestRate}%
      </td>

      {/* Category */}
      <td className="px-5  py-4 bg-white text-sm text-center">
        {loan.category}
      </td>

      {/* Actions */}
      <td className="px-5 py-4 bg-white text-sm text-center">
        <div className="flex items-center gap-2">
          <button
            onClick={handleUpdate}
            className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Update
          </button>

          <button
            onClick={() => handleDelete(loan._id)}
            className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
};

export default ManageLoanDataRow;
