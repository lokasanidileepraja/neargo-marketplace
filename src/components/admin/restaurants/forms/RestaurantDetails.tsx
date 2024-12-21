import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface RestaurantDetailsProps {
  formData: {
    description: string;
    address: string;
    deliveryMethods: string[];
  };
  handleInputChange: (field: string, value: string) => void;
}

export const RestaurantDetails = ({
  formData,
  handleInputChange,
}: RestaurantDetailsProps) => {
  return (
    <>
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
    </>
  );
};