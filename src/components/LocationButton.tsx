import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const LocationButton = () => {
  const { toast } = useToast();

  const handleLocationClick = () => {
    if (!navigator.geolocation) {
      toast({
        title: "Error",
        description: "Geolocation is not supported by your browser",
        variant: "destructive",
      });
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        toast({
          title: "Location found",
          description: `Lat: ${latitude.toFixed(4)}, Long: ${longitude.toFixed(4)}`,
        });
      },
      (error) => {
        toast({
          title: "Error",
          description: error.message,
          variant: "destructive",
        });
      }
    );
  };

  return (
    <Button
      variant="outline"
      size="icon"
      className="h-12 w-12 rounded-full"
      onClick={handleLocationClick}
    >
      <MapPin className="h-5 w-5" />
    </Button>
  );
};

export default LocationButton;