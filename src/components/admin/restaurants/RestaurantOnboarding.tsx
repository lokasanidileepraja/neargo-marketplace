import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

export function RestaurantOnboarding() {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Restaurant details submitted",
      description: "The restaurant information has been saved successfully.",
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Restaurant Onboarding</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Restaurant Name</label>
              <Input placeholder="Enter restaurant name" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Contact Email</label>
              <Input type="email" placeholder="Enter email" />
            </div>
          </div>
          <Button type="submit">Submit Details</Button>
        </form>
      </CardContent>
    </Card>
  );
}