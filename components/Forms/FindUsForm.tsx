import { Input } from '../ui/input'
import { Button } from '../ui/button'

export default function FindUsForm() {
  return (
    <form className="grid grid-cols-1 md:mt-4 md:grid-cols-2 gap-6">
          <Input placeholder="Product" list="productList" className="" />
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
          <Input placeholder="Phone Number" type="number" className="" />
          <Input placeholder="Leave a message for us" className="" />
          <Button type="submit" className="md:col-span-2">Send Message</Button>
        </form>
  )
}
