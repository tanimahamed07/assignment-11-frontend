import { useState } from "react";
import UpdateUserRoleModal from "../../Modal/UpdateUserRoleModal";

const UserDataRow = ({ user, refetch }) => {
  let [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);

  return (
    <tr>
      {/* Name */}
      <td className="px-5 py-5 border-b bg-white text-sm">
        <p className="text-gray-900">{user.name}</p>
      </td>

      {/* Email */}
      <td className="px-5 py-5 border-b bg-white text-sm">
        <p className="text-gray-900">{user.email}</p>
      </td>

      {/* Role */}
      <td className="px-5 py-5 border-b bg-white text-sm">
        <p className="text-gray-900 capitalize">{user.role}</p>
      </td>

      {/* Action */}
      <td className="px-5 py-5 border-b bg-white text-sm">
        <span
          onClick={() => setIsOpen(true)}
          className="cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight relative"
        >
          <span className="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
          <span className="relative">Update Role</span>
        </span>

        {/* Modal */}
        {isOpen && (
          <UpdateUserRoleModal
            isOpen={isOpen}
            closeModal={closeModal}
            user={user}
            refetch={refetch}
          />
        )}
      </td>
    </tr>
  );
};

export default UserDataRow;
