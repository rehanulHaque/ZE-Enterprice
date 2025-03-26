"use client";
import { useState } from "react";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { Input } from "../ui/input";
import { FieldValues, useForm } from "react-hook-form";
import { ServicePageEnquiryTypes } from "@/types/ActionTypes";
import { servicePageEnquiry } from "@/actions/ServicePageEnquiry";
import { toast } from "sonner";

export default function ServiceContact({ data }: { data: { id: string; title: string }[] }) {
  const [selectedService, setSelectedService] = useState(""); // Stores the service title
  const { register, handleSubmit, reset, setValue } = useForm();

  const onSubmit = async (formData: FieldValues) => {
    const enquiryData: ServicePageEnquiryTypes = {
      name: formData.name,
      details: formData.details,
      email: formData.email,
      phone: formData.phone,
      serviceId: formData.serviceId, // Ensures correct ID is submitted
    };
    const response = await servicePageEnquiry(enquiryData);
    if (response.type === 0) {
      return toast.error(response.data);
    }
    toast.success(response.data);
    reset();
    setSelectedService(""); // Clear input after submit
  };

  const handleServiceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const service = data.find((s) => s.title === event.target.value); // Match title to ID
    if (service) {
      setSelectedService(service.title); // Display title
      setValue("serviceId", service.id); // Store ID in form
    } else {
      setSelectedService(event.target.value); // Allow typing
      setValue("serviceId", ""); // Reset ID if input is invalid
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4"
    >
      <div>
        <label htmlFor="name" className="text-sm">Name</label>
        <Input
        autoComplete="off"
          placeholder="Name"
          id="name"
          className="bg-white"
          {...register("name", { required: true })}
        />
      </div>
      <div>
        <label htmlFor="email" className="text-sm">Email</label>
        <Input
        autoComplete="off"
          placeholder="Email"
          id="email"
          className="bg-white"
          {...register("email", { required: true })}
        />
      </div>
      <div>
        <label htmlFor="mobileNumber" className="text-sm">Mobile Number</label>
        <Input
        autoComplete="off"
          placeholder="Mobile Number"
          id="mobileNumber"
          className="bg-white"
          {...register("phone", { required: true })}
        />
      </div>
      <div>
        <label htmlFor="service" className="text-sm">Service</label>
        <Input
          placeholder="Service"
          list="serviceList"
          className="bg-white"
          value={selectedService}
          onChange={handleServiceChange}
        />
        <datalist id="serviceList">
          {data.map((ser) => (
            <option value={ser.title} key={ser.id}>{ser.title}</option>
          ))}
        </datalist>
      </div>
      <div className="col-span-1 md:col-span-2">
        <label htmlFor="requirements" className="text-sm">Details</label>
        <Textarea
        autoComplete="off"
          id="requirements"
          placeholder="Details"
          className="bg-white"
          {...register("details", { required: true })}
        />
      </div>
      <Button type="submit" className="md:col-span-2">
        Send Enquiry
      </Button>
    </form>
  );
}
