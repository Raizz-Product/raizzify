"use client";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "./ui/separator";
import { useToggle } from "@/state/toggle-state";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { gsap } from "gsap";
import { useState } from "react";

const Navbar = () => {
  const { isToggled } = useToggle();
  const pathname = usePathname();

  const [open, setOpen] = useState(false)
  const scrollToSection = (id: string) => {
    gsap.to(window, { duration: 1, scrollTo: `#${id}` });
  };


  const handleClose = (link: string) => {
    setOpen(false)
    scrollToSection(link);
  }
  return (
    <>
      <header className="px-4 sm:px-6 md:px-8 z-[100] lg:px-14 py-6 h-16 shadow-md flex items-center">
        <nav className="w-full flex items-center justify-between">
          <Link href={'/'} className="text-primary font-bold text-2xl uppercase">Raizzify</Link>
          {
            pathname === "/about/" ? <div className="md:flex hidden font-medium items-center gap-x-8">
              <p onClick={() => scrollToSection("our-story")} className="cursor-pointer text-secondaryTextColor hover:text-primary">Our story</p>
              {/* <p onClick={() => scrollToSection("team")} className="cursor-pointer text-secondaryTextColor hover:text-primary">Team</p> */}
              <p onClick={() => scrollToSection("how-we-work")} className="cursor-pointer text-secondaryTextColor hover:text-primary">How we work</p>
              <p onClick={() => scrollToSection("careers")} className="cursor-pointer text-secondaryTextColor hover:text-primary">Careers</p>
            </div> :
              <div className="md:flex hidden font-medium items-center gap-x-8">
                <p onClick={() => scrollToSection("features")} className="cursor-pointer text-secondaryTextColor hover:text-primary">Features</p>
                {
                  !isToggled &&
                  <>
                    <p onClick={() => scrollToSection("benefits")} className="cursor-pointer text-secondaryTextColor hover:text-primary">Benefits</p>
                    <p onClick={() => scrollToSection("pricing")} className="cursor-pointer text-secondaryTextColor hover:text-primary">Pricing</p>
                  </>
                }
                <p onClick={() => scrollToSection("testimonials")} className="cursor-pointer text-secondaryTextColor hover:text-primary">Testimonials</p>
                <p onClick={() => scrollToSection("faqs")} className="cursor-pointer text-secondaryTextColor hover:text-primary">FAQs</p>
              </div>
          }
          <Button className="md:block hidden">
            Get Started
          </Button>
        </nav>
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger>
            <Menu className="md:hidden block cursor-pointer" size={30} />
          </SheetTrigger>
          <SheetContent side={"right"}>
            <SheetHeader>
              <SheetDescription>
                {
                  pathname === "/about/" ? <div className="flex flex-col text-xl items-start mt-6 gap-y-6 gap-x-6">
                    <p onClick={() => handleClose("our-story")} className="cursor-pointer text-secondaryTextColor hover:text-primary">Our Story</p>
                    <Separator />
                    {/* <p onClick={() => scrollToSection("team")} className="cursor-pointer text-secondaryTextColor hover:text-primary">Team</p>
                    <Separator /> */}
                    <p onClick={() => handleClose("how-we-work")} className="cursor-pointer text-secondaryTextColor hover:text-primary">How we work</p>
                    <Separator />
                    <p onClick={() => handleClose("careers")} className="cursor-pointer text-secondaryTextColor hover:text-primary">Careers</p>
                    <Separator />
                  </div> :
                    <div className="flex flex-col text-xl items-start mt-6 gap-y-6 gap-x-6">
                      <p onClick={() => handleClose("features")} className="cursor-pointer text-secondaryTextColor hover:text-primary">Features</p>
                      <Separator />
                      {
                        !isToggled &&
                        <>
                          <p onClick={() => handleClose("benefits")} className="cursor-pointer text-secondaryTextColor hover:text-primary">Benefits</p>
                          <Separator />
                          <p onClick={() => scrollToSection("pricing")} className="cursor-pointer text-secondaryTextColor hover:text-primary">Pricing</p>
                          <Separator />
                        </>
                      }
                      <p onClick={() => handleClose("testimonials")} className="cursor-pointer text-secondaryTextColor hover:text-primary">Testimonials</p>
                      <Separator />
                      <p onClick={() => handleClose("faqs")} className="cursor-pointer text-secondaryTextColor hover:text-primary">FAQs</p>
                    </div>
                }
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </header>
    </>
  );
};
export default Navbar;
