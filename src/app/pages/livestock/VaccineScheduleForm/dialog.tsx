import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
} from "@/components/ui/dialog"

import VaccineSchedule from "./VaccineSchedule"

interface LivestockDialogProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}


export function Dialogbutton( {isOpen, setIsOpen}: LivestockDialogProps) {
  return (
     <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent >
        <DialogHeader>
          
          <DialogDescription>
            
          </DialogDescription>
        </DialogHeader>
        <VaccineSchedule/> 
        {/* <div className="flex items-center gap-2">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="link" className="sr-only">
              Link
            </Label>
            <Input
              id="link"
              defaultValue="https://ui.shadcn.com/docs/installation"
              readOnly
            />
          </div>
        </div> */}
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
