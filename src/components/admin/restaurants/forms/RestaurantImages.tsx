import { Input } from "@/components/ui/input";

interface RestaurantImagesProps {
  handleFileUpload: (field: string, files: FileList | null) => void;
}

export const RestaurantImages = ({ handleFileUpload }: RestaurantImagesProps) => {
  return (
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
  );
};