import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { BasicInfoForm } from "./forms/BasicInfoForm";
import { VehicleInfoForm } from "./forms/VehicleInfoForm";
import { AdditionalInfoForm } from "./forms/AdditionalInfoForm";
import { driverFormSchema, type DriverFormValues } from "./types/driver";

export interface AddDriverFormProps {
  onClose: () => void;
}

export function AddDriverForm({ onClose }: AddDriverFormProps) {
  const { toast } = useToast();

  const form = useForm<DriverFormValues>({
    resolver: zodResolver(driverFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      licenseNumber: "",
      vehicleType: "",
      vehicleModel: "",
      vehiclePlate: "",
      address: "",
      experience: "",
      notes: "",
    },
  });

  function onSubmit(values: DriverFormValues) {
    console.log(values);
    toast({
      title: "Driver added successfully",
      description: "The new driver has been added to the system.",
    });
    onClose();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-medium">Basic Information</h3>
            <p className="text-sm text-muted-foreground">
              Enter the driver's personal information.
            </p>
            <div className="mt-4">
              <BasicInfoForm form={form} />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium">Vehicle Information</h3>
            <p className="text-sm text-muted-foreground">
              Enter details about the driver's vehicle.
            </p>
            <div className="mt-4">
              <VehicleInfoForm form={form} />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium">Additional Information</h3>
            <p className="text-sm text-muted-foreground">
              Enter any additional details about the driver.
            </p>
            <div className="mt-4">
              <AdditionalInfoForm form={form} />
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-4">
          <Button type="button" variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit">Add Driver</Button>
        </div>
      </form>
    </Form>
  );
}