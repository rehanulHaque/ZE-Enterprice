import React from 'react'
import { Textarea } from '../ui/textarea'
import { Button } from '../ui/button'
import { Input } from '../ui/input'

export default function ProductContact({productId}: {productId: string | undefined}) {

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
              Quantity
            </label>
            <div className="flex gap-4">
              <Input
                placeholder="Quantity"
                id="quantityPrice"
                className="bg-white"
              />
              <Input
                placeholder="Price"
                id="quantityPrice"
                className="bg-white"
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
            />
          </div>
          <Button type="submit" className="md:col-span-2">
            Send Enquiry
          </Button>
        </form>
  )
}
