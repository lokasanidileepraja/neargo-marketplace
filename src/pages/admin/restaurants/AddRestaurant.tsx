import { AdminHeader } from "@/components/admin/AdminHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import BackButton from "@/components/BackButton";

export default function AddRestaurant() {
  return (
    <div className="min-h-screen bg-gray-50">
      <AdminHeader />
      <main className="container mx-auto py-8 px-4">
        <BackButton to="/admin/restaurants" label="Back to Restaurants" />
        <h1 className="text-3xl font-bold mb-8">Add New Restaurant</h1>

        <Card>
          <CardHeader>
            <CardTitle>Restaurant Details</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Restaurant Name</label>
                  <Input placeholder="Enter restaurant name" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Restaurant Type</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="fast-food">Fast Food</SelectItem>
                      <SelectItem value="fine-dining">Fine Dining</SelectItem>
                      <SelectItem value="casual">Casual Dining</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Delivery Methods</label>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2">
                      <input type="checkbox" /> Delivery
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" /> Pickup
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" /> Dine-in
                    </label>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Cuisine Type</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select cuisine" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="indian">Indian</SelectItem>
                      <SelectItem value="chinese">Chinese</SelectItem>
                      <SelectItem value="italian">Italian</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm font-medium">Description</label>
                  <Textarea
                    placeholder="Enter restaurant description"
                    className="h-24"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input type="email" placeholder="Enter email address" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Password</label>
                  <Input type="password" placeholder="Enter password" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Opening Hours</label>
                  <Input type="time" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Closing Hours</label>
                  <Input type="time" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Logo</label>
                  <Input type="file" accept="image/*" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Cover Image</label>
                  <Input type="file" accept="image/*" />
                </div>

                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm font-medium">Menu Images</label>
                  <Input type="file" accept="image/*" multiple />
                </div>
              </div>

              <Button type="submit" className="w-full md:w-auto">
                Add Restaurant
              </Button>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}