"use client";
import { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { FieldValues, useForm } from "react-hook-form";
import { toast } from "sonner";
import { EnquiryData } from "@/types/ActionTypes";
import { axiosInstance } from "@/lib/axiosInstance";

export default function FindUsForm({
  data,
}: {
  data: { id: string; title: string }[];
}) {
  const [selectedProduct, setSelectedProduct] = useState(""); // Store the product title
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
    setValue, // Allows manually setting form values
  } = useForm();

  const onSubmit = async (formData: FieldValues) => {
    const enquiryData: EnquiryData = {
      name: formData.name,
      email: formData.email,
      productId: formData.productId, // This should now have the correct ID
      phone: formData.phone,
      location: formData.location,
      message: formData.message,
    };
    const response = await axiosInstance.post("/enquiryData", enquiryData);
    if (!response.data) {
      return toast.error("Error Occured!");
    }
    toast.success(response.data.message);
    reset();
    setSelectedProduct(""); // Clear input after submit
  };

  const handleProductChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const product = data.find((p) => p.title === event.target.value); // Match title to ID
    if (product) {
      setSelectedProduct(product.title); // Display title in input
      setValue("productId", product.id); // Store ID in form
    } else {
      setSelectedProduct(event.target.value); // Allow typing
      setValue("productId", ""); // Reset ID if it's an invalid entry
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid grid-cols-1 md:mt-4 md:grid-cols-2 gap-6"
    >
      <Input
        placeholder="Product"
        list="productList"
        className="bg-white"
        value={selectedProduct}
        onChange={handleProductChange}
      />
      <datalist id="productList">
        {data.map((pro) => (
          <option value={pro.title} key={pro.id}>
            {pro.title}
          </option>
        ))}
      </datalist>

      <Input
        autoComplete="off"
        placeholder="Name"
        className="bg-white"
        {...register("name", { required: true })}
      />
      <Input
        autoComplete="off"
        placeholder="Email"
        className="bg-white"
        {...register("email", { required: true })}
      />
      <Input
        autoComplete="off"
        placeholder="Location"
        className="bg-white"
        {...register("location", { required: true })}
      />
      <Input
        autoComplete="off"
        placeholder="Phone Number"
        type="number"
        className="bg-white"
        {...register("phone", { required: true })}
      />
      <Input
        autoComplete="off"
        placeholder="Leave a message for us"
        className="bg-white"
        {...register("message", { required: true })}
      />
      <Button type="submit" className="md:col-span-2" disabled={isSubmitting}>
        Send Message
      </Button>
    </form>
  );
}
