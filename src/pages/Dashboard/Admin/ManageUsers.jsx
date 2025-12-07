import UserDataRow from "../../../components/Dashboard/TableRows/UserDataRow";

const ManageUsers = () => {
  return (
    <>
      <div className="container mx-auto px-4 sm:px-8">
        <div className="py-8">
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm font-semibold uppercase">
                      Email
                    </th>
                    <th className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm font-semibold uppercase">
                      Role
                    </th>
                    <th className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm font-semibold uppercase">
                      Status
                    </th>
                    <th className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm font-semibold uppercase">
                      Action
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <UserDataRow />
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageUsers;
