"use client"; // Required for client-side interactivity

import React, { FormEvent, useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";
import Image from "next/image";

const ProductEnquiryModal = ({ productId, isOpen, onClose, image }: any) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendEnquiry({ productId, name, phone, message });
    setInterval(() => {
        onClose();
    }, 3000)
  };

  const sendEnquiry = (enquiryData: any) => {
    // Implement your logic to send the enquiry data (e.g., API call)
    console.log("Sending enquiry:", enquiryData);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="">
        <DialogHeader>
          <DialogTitle>Send Enquiry</DialogTitle>
          <DialogDescription>
            Fill out the form to send an enquiry about this product.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col md:flex-row gap-4 md:gap-8">
            {/* left */}
            <div className="w-full md:w-1/2">
                <Image src={image} height={300} width={300} alt="Product Image"/>
            </div>
            {/* right */}
            <div className="w-full md:w-1/2">
                <form onSubmit={handleSubmit} className="space-y-1">
                    <div>
                        <label htmlFor="name" className="text-sm font-medium">Name</label>
                        <Input placeholder="Name" id="name" onChange={(e) => setName(e.target.value)} required value={name}/>
                    </div>
                    <div>
                        <label htmlFor="phone" className="text-sm font-medium">Phone</label>
                        <Input placeholder="Phone" id="phone" onChange={(e) => setPhone(e.target.value)} required value={phone}/>
                    </div>
                    <div>
                        <label htmlFor="message" className="text-sm font-medium">Message</label>
                        <Input placeholder="Message" id="message" onChange={(e) => setMessage(e.target.value)} required value={message}/>
                    </div>
                    <Button className="mt-2 w-full" type="submit">Enquiry Now</Button>
                </form>
            </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductEnquiryModal;