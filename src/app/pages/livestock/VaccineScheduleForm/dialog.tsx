import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import VaccineSchedule from "./VaccineSchedule";

interface LivestockDialogProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export function Dialogbutton({ isOpen, setIsOpen }: LivestockDialogProps) {
  const closeDialog = () => {
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className=" w-full sm:max-w-md md:max-w-xl lg:max-w-2xl max-h-[90vh] overflow-y-auto rounded-none">
        <DialogHeader>
          <DialogTitle>Vaccine Schedule Creation</DialogTitle>
          <DialogDescription>
            Fill out the form below to create a new vaccine schedule for your livestock.
          </DialogDescription>
        </DialogHeader>
        <VaccineSchedule closeDialog={closeDialog} />
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
           
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}