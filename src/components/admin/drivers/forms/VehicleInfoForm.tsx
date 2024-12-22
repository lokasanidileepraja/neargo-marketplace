import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UseFormReturn } from "react-hook-form";
import { DriverFormValues } from "../types/driver";

interface VehicleInfoFormProps {
  form: UseFormReturn<DriverFormValues>;
}

export function VehicleInfoForm({ form }: VehicleInfoFormProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <FormField
        control={form.control}
        name="vehicleType"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Vehicle Type</FormLabel>
            <FormControl>
              <Input placeholder="Enter vehicle type" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="vehicleModel"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Vehicle Model</FormLabel>
            <FormControl>
              <Input placeholder="Enter vehicle model" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="vehiclePlate"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Vehicle Plate</FormLabel>
            <FormControl>
              <Input placeholder="Enter vehicle plate" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="experience"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Years of Experience</FormLabel>
            <FormControl>
              <Input type="number" placeholder="Enter years of experience" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}