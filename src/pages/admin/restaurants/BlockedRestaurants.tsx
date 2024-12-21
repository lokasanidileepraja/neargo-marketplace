import { Table } from "@/components/ui/table";
import AdminHeader from "@/components/admin/AdminHeader";

const BlockedRestaurants = () => {
  return (
    <div className="p-6">
      <AdminHeader 
        title="Blocked Restaurants" 
        description="View and manage blocked restaurants"
      />
      <div className="rounded-md border mt-6">
        <Table>
          <thead>
            <tr>
              <th>Restaurant Name</th>
              <th>Blocked Date</th>
              <th>Reason</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Sample Restaurant 2</td>
              <td>2024-03-20</td>
              <td>Policy Violation</td>
              <td>
                <button className="text-blue-600 hover:text-blue-800">Unblock</button>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default BlockedRestaurants;