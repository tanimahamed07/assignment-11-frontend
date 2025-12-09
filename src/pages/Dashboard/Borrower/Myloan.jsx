import { useQuery } from "@tanstack/react-query";
import CustomerOrderDataRow from "../../../components/Dashboard/TableRows/CustomerOrderDataRow";
import useAuth from "../../../hooks/useAuth";
import { useEffect } from "react";
import LoadingSpinner from "../../../components/Shared/LoadingSpinner";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const MyLoan = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const {
    data: myLoans = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["my-loans", user?.email],
    queryFn: async () => {
      const result = await axiosSecure(`/my-loan/${user?.email}`);
      return result.data;
    },
  });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const sessionId = params.get("session_id");

    if (sessionId) {
      refetch();

      window.history.replaceState({}, document.title, "/dashboard/my-loan");
    }
  }, []);
  if (isLoading) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  return (
    <div className="container mx-auto px-4 sm:px-8">
      <div className="py-8">
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th className="px-5 py-3 bg-white border-b">Loan ID</th>
                  <th className="px-5 py-3 bg-white border-b">Loan Info</th>
                  <th className="px-5 py-3 bg-white border-b">Amount</th>
                  <th className="px-5 py-3 bg-white border-b">Status</th>
                  <th className="px-5 py-3 bg-white border-b">Actions</th>
                </tr>
              </thead>

              <tbody>
                {myLoans.map((myLoan) => (
                  <CustomerOrderDataRow
                    key={myLoan._id}
                    myLoan={myLoan}
                    refetch={refetch}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyLoan;
