import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { HomePageData } from "@/data";

export default function QuickEnquiry() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-16 max-w-5xl md:mx-auto mt-10 mx-4">
      {/* Left */}
      <div className="bg-purple-400 md:col-span-2 flex flex-col items-start gap-4 p-4 rounded-xl">
        <h1 className="text-2xl font-bold">HOW TO FIND US</h1>
        {HomePageData.details.map(item => (
          <div className="flex gap-4 items-center justify-center" key={item.id}>
          <item.icon className="h-8 w-8 font-medium" />
          <p className="font-medium">{item.text}</p>
        </div>
        ))}
      </div>
      {/* Right */}
      <div className="md:col-span-3">
        <div className="grid grid-cols-1 md:mt-4 md:grid-cols-2 gap-6">
          <Input
            placeholder="Product"
            list="productList"
            className=""
          />
          <datalist id="productList">
            <option value="calender">Calender</option>
            <option value="Leather Jacket">Leather Jacket</option>
            <option value="Card">Cars</option>
            <option value="Pen">Pen</option>
          </datalist>
          <Input placeholder="Name" className="" />
          <Input placeholder="Email" className="" />
          <select>
            <option value="india">India</option>
            <option value="pakistan">Pakistan</option>
            <option value="bangladesh">Bangla Desh</option>
          </select>
          <Input
            placeholder="Phone Number"
            type="number"
            className=""
          />
          <Input placeholder="Leave a message for us" className="" />
          <Button className="md:col-span-2">Send Message</Button>
        </div>
      </div>
    </div>
  );
}
