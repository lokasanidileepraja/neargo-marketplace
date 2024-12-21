import { Table } from "@/components/ui/table";
import { AdminHeader } from "@/components/admin/AdminHeader";

const UnapprovedRestaurants = () => {
  return (
    <div className="p-6">
      <AdminHeader 
        title="Unapproved Restaurants" 
        description="Review and manage restaurant approval requests"
      />
      <div className="rounded-md border mt-6">
        <Table>
          <thead>
            <tr>
              <th>Restaurant Name</th>
              <th>Submission Date</th>
              <th>Documents Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Sample Restaurant 1</td>
              <td>2024-03-21</td>
              <td>Pending Review</td>
              <td>
                <div className="flex gap-2">
                  <button className="text-green-600 hover:text-green-800">Approve</button>
                  <button className="text-red-600 hover:text-red-800">Reject</button>
                </div>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default UnapprovedRestaurants;