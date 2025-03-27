"use client";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { FieldValues, useForm } from "react-hook-form";
import { ProductPageEnquiryTypes } from "@/types/ActionTypes";
import { toast } from "sonner";
import axios from "axios";

export default function ProductContact({
  productId,
}: {
  productId: string | undefined;
}) {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm();

  const onSubmit = async (formData: FieldValues) => {
    if (!productId) return toast("Error Occured");
    const enquiryData: ProductPageEnquiryTypes = {
      name: formData.name,
      email: formData.email,
      productId: productId,
      phone: formData.phone,
      price: formData.price,
      quantity: formData.quantity,
      requirementDetails: formData.requirementDetails,
    };
    const response = await axios.post("/api/productenquiry", enquiryData);
    if (!response.data.success) {
      return toast.error(response.data.message);
    }
    toast.success(response.data.message);
    reset();
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4"
    >
      <div>
        <label htmlFor="name" className="text-sm">
          Name
        </label>
        <Input
        autoComplete="off"
          placeholder="Name"
          id="name"
          className="bg-white"
          {...register("name", { required: true })}
        />
      </div>
      <div>
        <label htmlFor="email" className="text-sm">
          Email
        </label>
        <Input
        autoComplete="off"
          placeholder="Email"
          id="email"
          className="bg-white"
          {...register("email", { required: true })}
        />
      </div>
      <div>
        <label htmlFor="mobileNumber" className="text-sm">
          Mobile Number
        </label>
        <Input
        autoComplete="off"
          placeholder="Mobile Number"
          id="mobileNumber"
          className="bg-white"
          {...register("phone", { required: true })}
        />
      </div>
      <div>
        <label htmlFor="quantityPrice" className="text-sm">
          Quantity
        </label>
        <div className="flex gap-4">
          <Input
          autoComplete="off"
            placeholder="Quantity"
            id="quantityPrice"
            className="bg-white"
            {...register("quantity", { required: true })}
          />
          <Input
          autoComplete="off"
            placeholder="Price"
            id="quantityPrice"
            className="bg-white"
            {...register("price", { required: true })}
          />
        </div>
      </div>
      <div className="col-span-1 md:col-span-2">
        <label htmlFor="requirements" className="text-sm">
          Requirements Details
        </label>
        <Textarea
          id="requirements"
          placeholder="Requirements Details"
          className="bg-white"
          {...register("requirementDetails", { required: true })}
          autoComplete="off"
        />
      </div>
        <Button type="submit" className="md:col-span-2" disabled={isSubmitting}>
          Send Enquiry
        </Button>
    </form>
  );
}
