"use client";
import React from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { toast } from "sonner";
import { ProductQuickEnquiryType, ServiceQuickEnquiryType } from "@/types/ActionTypes";
import { FieldValues, useForm } from "react-hook-form";
import axios from "axios";

export default function QuickEnquiryForm({id, type}: {type: "product" | "service",id: string | undefined}) {
  const {
    register,
        handleSubmit,
        formState: { isSubmitting },
        reset,
      } = useForm();
    if(!id) {
      return toast.error("Error Occured")
    }
      const onSubmitProduct = async (formData: FieldValues) => {
        const enquiryData: ProductQuickEnquiryType = {
          email: formData.email,
          productId: id,
        };
        const response = await axios.post("/api/productquickenquiry", enquiryData);
    if (!response.data.success) {
      return toast.error(response.data.message);
    }
    toast.success(response.data.message);
        reset();
      };

      const onSubmitService = async (formData: FieldValues) => {
        const enquiryData: ServiceQuickEnquiryType = {
          email: formData.email,
          serviceId: id,
        };
        const response = await axios.post("/api/servicequickenquiry", enquiryData);
    if (!response.data.success) {
      return toast.error(response.data.message);
    }
    toast.success(response.data.message);
        reset();
      };
  return (
    <form onSubmit={type == "product" ? handleSubmit(onSubmitProduct) : handleSubmit(onSubmitService)} className="flex justify-start items-center gap-4">
      <Input
      autoComplete="off"
        placeholder="Email"
        className="bg-white flex flex-col md:flex-row md:justify-start md:items-center gap-4"
        {...register("email", {required: true})}
      />
      <Button type="submit" disabled={isSubmitting}>Quick Enquiry</Button>
    </form>
  );
}
