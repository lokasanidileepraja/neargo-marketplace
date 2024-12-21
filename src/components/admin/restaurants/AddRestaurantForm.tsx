import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

export const AddRestaurantForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    deliveryMethods: [],
    cuisine: "",
    description: "",
    address: "",
    email: "",
    password: "",
    logo: null as File | null,
    coverImage: null as File | null,
    menuImages: [] as File[],
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleFileUpload = (field: string, files: FileList | null) => {
    if (!files) return;

    if (field === "menuImages") {
      setFormData((prev) => ({
        ...prev,
        menuImages: Array.from(files),
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [field]: files[0],
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log("Form submitted:", formData);
    toast({
      title: "Restaurant Added",
      description: "The restaurant has been successfully added to the system.",
    });
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>Basic Information</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium">Restaurant Name</label>
              <Input
                placeholder="Enter restaurant name"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Restaurant Type</label>
              <Select
                value={formData.type}
                onValueChange={(value) => handleInputChange("type", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="fast-food">Fast Food</SelectItem>
                  <SelectItem value="casual">Casual Dining</SelectItem>
                  <SelectItem value="fine-dining">Fine Dining</SelectItem>
                  <SelectItem value="cafe">Café</SelectItem>
                  <SelectItem value="buffet">Buffet</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Delivery Methods</label>
              <Select
                value={formData.deliveryMethods[0]}
                onValueChange={(value) => handleInputChange("deliveryMethods", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select delivery methods" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="delivery">Delivery</SelectItem>
                  <SelectItem value="pickup">Pickup</SelectItem>
                  <SelectItem value="dine-in">Dine-in</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Cuisine Type</label>
              <Select
                value={formData.cuisine}
                onValueChange={(value) => handleInputChange("cuisine", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select cuisine" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="italian">Italian</SelectItem>
                  <SelectItem value="chinese">Chinese</SelectItem>
                  <SelectItem value="indian">Indian</SelectItem>
                  <SelectItem value="mexican">Mexican</SelectItem>
                  <SelectItem value="japanese">Japanese</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2 md:col-span-2">
              <label className="text-sm font-medium">Description</label>
              <Textarea
                placeholder="Enter restaurant description"
                value={formData.description}
                onChange={(e) => handleInputChange("description", e.target.value)}
                className="min-h-[100px]"
              />
            </div>

            <div className="space-y-2 md:col-span-2">
              <label className="text-sm font-medium">Address</label>
              <Textarea
                placeholder="Enter restaurant address"
                value={formData.address}
                onChange={(e) => handleInputChange("address", e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Email</label>
              <Input
                type="email"
                placeholder="Enter email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Password</label>
              <Input
                type="password"
                placeholder="Enter password"
                value={formData.password}
                onChange={(e) => handleInputChange("password", e.target.value)}
              />
            </div>

            <div className="space-y-2 md:col-span-2">
              <label className="text-sm font-medium">Upload Images</label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleFileUpload("logo", e.target.files)}
                  />
                  <p className="text-sm text-gray-500 mt-1">Upload logo</p>
                </div>
                <div>
                  <Input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleFileUpload("coverImage", e.target.files)}
                  />
                  <p className="text-sm text-gray-500 mt-1">Upload cover image</p>
                </div>
                <div>
                  <Input
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={(e) => handleFileUpload("menuImages", e.target.files)}
                  />
                  <p className="text-sm text-gray-500 mt-1">Upload menu images</p>
                </div>
              </div>
            </div>
          </div>

          <Button type="submit" className="w-full md:w-auto">
            Add Restaurant
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};