import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

const timeSlots = [
  "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
  "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM",
  "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM",
  "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM",
];

const CTASection = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [date, setDate] = useState<Date>();
  const [time, setTime] = useState<string>();

  const handleBookCall = () => {
    if (!date || !time) return;
    const dateStr = format(date, "PPP");
    const message = encodeURIComponent(
      `Hi Kreat Web! I'd like to book a call on ${dateStr} at ${time}. Please confirm availability.`
    );
    window.open(`https://ig.me/m/kreat_web?text=${message}`, "_blank");
    setDialogOpen(false);
    setDate(undefined);
    setTime(undefined);
  };

  return (
    <section id="contact" className="py-32 px-6 lg:px-12 bg-secondary/50 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/5 rounded-full blur-[150px]" />

      <div className="container mx-auto max-w-3xl text-center relative z-10">
        <p className="text-sm tracking-[0.4em] text-muted-foreground uppercase mb-4 font-body">
          Ready?
        </p>
        <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl text-foreground mb-6 leading-tight">
          Let's build something{" "}
          <span className="italic text-gradient">better</span>
        </h2>
        <p className="text-muted-foreground font-body font-light text-lg mb-12 max-w-lg mx-auto">
          Your brand deserves a premium website. Let's make it happen.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://www.instagram.com/kreat_web/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 bg-primary text-primary-foreground text-sm tracking-widest uppercase font-body hover:bg-accent transition-all duration-500"
          >
            DM on Instagram
          </a>
          <button
            onClick={() => setDialogOpen(true)}
            className="px-10 py-4 border border-primary/30 text-foreground text-sm tracking-widest uppercase font-body hover:bg-primary hover:text-primary-foreground transition-all duration-500"
          >
            Book a Call
          </button>
        </div>
      </div>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="sm:max-w-md bg-background border-primary/20">
          <DialogHeader>
            <DialogTitle className="font-heading text-2xl text-foreground">Book a Call</DialogTitle>
            <DialogDescription className="text-muted-foreground font-body">
              Pick a date and time — we'll confirm via Instagram DM.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6 pt-2">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-body border-primary/20",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : "Select a date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  disabled={(d) => d < new Date()}
                  initialFocus
                  className="p-3 pointer-events-auto"
                />
              </PopoverContent>
            </Popover>

            {date && (
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground font-body">Select a time</p>
                <div className="grid grid-cols-4 gap-2">
                  {timeSlots.map((slot) => (
                    <button
                      key={slot}
                      onClick={() => setTime(slot)}
                      className={cn(
                        "py-2 px-1 text-xs font-body border rounded transition-all duration-300",
                        time === slot
                          ? "bg-primary text-primary-foreground border-primary"
                          : "border-primary/20 text-muted-foreground hover:border-primary/50"
                      )}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <Button
              onClick={handleBookCall}
              disabled={!date || !time}
              className="w-full bg-primary text-primary-foreground hover:bg-accent tracking-widest uppercase text-sm font-body"
            >
              Send to Instagram DM
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default CTASection;
