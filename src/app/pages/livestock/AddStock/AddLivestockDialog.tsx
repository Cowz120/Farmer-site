'use client';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import AddStockForm from './AddLivestockForm';

interface AddLivestockDialogProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export default function AddLivestockDialog({ isOpen, setIsOpen }: AddLivestockDialogProps) {
  
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className=" w-full sm:max-w-md md:max-w-xl lg:max-w-2xl max-h-[90vh] overflow-y-auto rounded-none">
        <DialogHeader>
          <DialogTitle>Add New Stock</DialogTitle>
          <DialogDescription>
           
          </DialogDescription>
        </DialogHeader>
        <AddStockForm/>
        <DialogFooter>
          <Button variant="outline" onClick={() => setIsOpen(false)}>
            Back
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}