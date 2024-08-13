import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { ClipboardPaste, Plus } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useRef } from "react";

const JoinClassroomModal = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handlePaste = async () => {
    try {
      const textToPaste = await navigator.clipboard.readText();
      if (inputRef.current) {
        inputRef.current.value = textToPaste;
      }
    } catch (err) {
      console.error("Failed to read clipboard contents: ", err);
    }
  };

  return (
    <Dialog>
      <DialogTrigger>
        <Button
          variant="link"
          className="p-2 font-semibold text-sm flex items-center gap-2"
        >
          <Plus className="w-6 h-6" />
          Join Classroom
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Join now</DialogTitle>
          <DialogDescription>
            Paste your key to join classroom.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="key" className="sr-only">
              Key
            </Label>
            <Input id="key" ref={inputRef} />
          </div>
          <Button
            type="submit"
            size="sm"
            className="px-3"
            onClick={handlePaste}
          >
            <span className="sr-only">Paste</span>
            <ClipboardPaste className="h-4 w-4" />
          </Button>
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Join now
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default JoinClassroomModal;
