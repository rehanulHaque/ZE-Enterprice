import React from "react";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { Input } from "../ui/input";

export default function ServiceContact() {
  return (
    <form className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
      <div>
        <label htmlFor="name" className="text-sm">
          Name
        </label>
        <Input placeholder="Name" id="name" className="bg-white" />
      </div>
      <div>
        <label htmlFor="email" className="text-sm">
          Email
        </label>
        <Input placeholder="Email" id="email" className="bg-white" />
      </div>
      <div>
        <label htmlFor="mobileNumber" className="text-sm">
          Mobile Number
        </label>
        <Input
          placeholder="Mobile Number"
          id="mobileNumber"
          className="bg-white"
        />
      </div>
      <div>
        <label htmlFor="quantityPrice" className="text-sm">
          Service
        </label>
        <Input placeholder="Service" list="serviceList" className="" />
        <datalist id="serviceList">
          <option value="digital marketing">Digital Marketing</option>
          <option value="Event Management">Event Management</option>
          <option value="Business Consultancy">Business Consultancy</option>
          <option value="Web Development">Web Development</option>
          <option value="Embroidery">Embroidery</option>
          <option value="Haj and Umrah">Haj & Umrah</option>
          <option value="other">Other</option>
        </datalist>
      </div>
      <div className="col-span-1 md:col-span-2">
        <label htmlFor="requirements" className="text-sm">
          Details
        </label>
        <Textarea
          id="requirements"
          placeholder="Details"
          className="bg-white"
        />
      </div>
      <Button type="submit" className="md:col-span-2">
        Send Enquiry
      </Button>
    </form>
  );
}
