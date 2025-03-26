"use client";
import React from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { toast } from "sonner";
import { ProductQuickEnquiry } from "@/actions/ProductQuickEnquiry";
import { ProductQuickEnquiryType, ServiceQuickEnquiryType } from "@/types/ActionTypes";
import { FieldValues, useForm } from "react-hook-form";
import { serviceQuickEnquiry } from "@/actions/ServiceQuickEnquiry";

export default function QuickEnquiryForm({id, type}: {type: "product" | "service",id: string | undefined}) {
    if(!id) return toast.error("Error Occured")
    const {
        register,
        handleSubmit,
        formState: { isSubmitting },
        reset,
      } = useForm();
      const onSubmitProduct = async (formData: FieldValues) => {
        const enquiryData: ProductQuickEnquiryType = {
          email: formData.email,
          productId: id,
        };
        const data = await ProductQuickEnquiry(enquiryData);
        if(data.type == 0){
          return toast.error(data.data);
        }
        toast.success(data.data);
        reset();
      };

      const onSubmitService = async (formData: FieldValues) => {
        const enquiryData: ServiceQuickEnquiryType = {
          email: formData.email,
          serviceId: id,
        };
        const data = await serviceQuickEnquiry(enquiryData);
        if(data.type == 0){
          return toast.error(data.data);
        }
        toast.success(data.data);
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
