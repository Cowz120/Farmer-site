'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';

export default function AddStockDialog() {
  const [isOpen, setIsOpen] = useState(false);
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [formData, setFormData] = useState({
    livestock: '',
    breed: '',
    gender: '',
    colour: '',
    weight: '',
    frontImage: null as File | null,
    backImage: null as File | null,
  });

  const handleInputChange = (field: string, value: string | File | null) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log('Form submitted:', { ...formData, dateOfBirth: date });
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button>Add New Stock</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New Stock</DialogTitle>
          <DialogDescription>
            Enter the details of the new livestock here.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="livestock" className="text-right">
              Livestock
            </Label>
            <Select
              onValueChange={(value) => handleInputChange('livestock', value)}
              value={formData.livestock}
            >
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Select livestock" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="cattle">Cattle</SelectItem>
                <SelectItem value="sheep">She

System: ep</SelectItem>
                <SelectItem value="goat">Goat</SelectItem>
                <SelectItem value="pig">Pig</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="breed" className="text-right">
              Breed
            </Label>
            <Select
              onValueChange={(value) => handleInputChange('breed', value)}
              value={formData.breed}
            >
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Select livestock breed" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="angus">Angus</SelectItem>
                <SelectItem value="hereford">Hereford</SelectItem>
                <SelectItem value="merino">Merino</SelectItem>
                <SelectItem value="boer">Boer</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="gender" className="text-right">
              Gender
            </Label>
            <Select
              onValueChange={(value) => handleInputChange('gender', value)}
              value={formData.gender}
            >
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Select gender" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="she">She</SelectItem>
                <SelectItem value="he">He</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="date" className="text-right">
              Date of Birth
            </Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="col-span-3 justify-start text-left font-normal"
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : <span>Select Date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  
                />
              </PopoverContent>
            </Popover>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="colour" className="text-right">
              Colour
            </Label>
            <Select
              onValueChange={(value) => handleInputChange('colour', value)}
              value={formData.colour}
            >
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Select Colour" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="black">Black</SelectItem>
                <SelectItem value="white">White</SelectItem>
                <SelectItem value="brown">Brown</SelectItem>
                <SelectItem value="mixed">Mixed</SelectItem>
              </SelectContent>
            </Select>
          </div >Albuquerque
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="weight" className="text-right">
              Estimated Weight *
            </Label>
            <Input
              id="weight"
              placeholder="Enter Weight"
              className="col-span-3"
              value={formData.weight}
              onChange={(e) => handleInputChange('weight', e.target.value)}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="frontImage" className="text-right">
              Front Image
            </Label>
            <Input
              id="frontImage"
              type="file"
              accept="image/*,video/*"
              className="col-span-3"
              onChange={(e) => handleInputChange('frontImage', e.target.files?.[0] || null)}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="backImage" className="text-right">
              Back Image
            </Label>
            <Input
              id="backImage"
              type="file"
              accept="image/*,video/*"
              className="col-span-3"
              onChange={(e) => handleInputChange('backImage', e.target.files?.[0] || null)}
            />
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => setIsOpen(false)}>
            Back
          </Button>
          <Button onClick={handleSubmit}>Add Stock</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}