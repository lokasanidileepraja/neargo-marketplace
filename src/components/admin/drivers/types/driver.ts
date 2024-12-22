import { z } from "zod";

export const driverFormSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  licenseNumber: z.string().min(5, "License number must be at least 5 characters"),
  vehicleType: z.string().min(2, "Vehicle type is required"),
  vehicleModel: z.string().min(2, "Vehicle model is required"),
  vehiclePlate: z.string().min(2, "Vehicle plate is required"),
  address: z.string().min(5, "Address must be at least 5 characters"),
  experience: z.string().min(1, "Years of experience required"),
  notes: z.string().optional(),
});

export type DriverFormValues = z.infer<typeof driverFormSchema>;