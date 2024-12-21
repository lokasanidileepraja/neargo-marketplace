import { Table } from "@/components/ui/table";
import { AdminHeader } from "@/components/admin/AdminHeader";

const RejectedRestaurants = () => {
  return (
    <div className="p-6">
      <AdminHeader 
        title="Rejected Restaurants" 
        description="View and manage rejected restaurant applications"
      />
      <div className="rounded-md border mt-6">
        <Table>
          <thead>
            <tr>
              <th>Restaurant Name</th>
              <th>Rejection Date</th>
              <th>Reason</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Sample Restaurant 3</td>
              <td>2024-03-19</td>
              <td>Incomplete Documentation</td>
              <td>
                <button className="text-blue-600 hover:text-blue-800">Review</button>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default RejectedRestaurants;