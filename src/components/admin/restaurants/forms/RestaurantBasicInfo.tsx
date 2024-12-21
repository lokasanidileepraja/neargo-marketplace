import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface RestaurantBasicInfoProps {
  formData: {
    name: string;
    type: string;
    cuisine: string;
    email: string;
    password: string;
  };
  handleInputChange: (field: string, value: string) => void;
}

export const RestaurantBasicInfo = ({
  formData,
  handleInputChange,
}: RestaurantBasicInfoProps) => {
  return (
    <>
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
    </>
  );
};