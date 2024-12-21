import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { RestaurantBasicInfo } from "./forms/RestaurantBasicInfo";
import { RestaurantDetails } from "./forms/RestaurantDetails";
import { RestaurantImages } from "./forms/RestaurantImages";

interface AddRestaurantFormProps {
  onClose: () => void;
}

export const AddRestaurantForm = ({ onClose }: AddRestaurantFormProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    type: "food-delivery", // Default to first category
    deliveryMethods: ["delivery"],
    cuisine: "italian",
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    
    toast({
      title: "Restaurant Added",
      description: "The restaurant has been successfully added to the system.",
    });
    onClose();
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader className="flex flex-row justify-between items-center">
        <CardTitle>Add New Restaurant</CardTitle>
        <Button variant="outline" onClick={onClose}>
          Cancel
        </Button>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <RestaurantBasicInfo 
              formData={formData} 
              handleInputChange={handleInputChange} 
            />
            <RestaurantDetails 
              formData={formData} 
              handleInputChange={handleInputChange} 
            />
            <RestaurantImages handleFileUpload={handleFileUpload} />
          </div>

          <div className="flex justify-end gap-4">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit">Add Restaurant</Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};