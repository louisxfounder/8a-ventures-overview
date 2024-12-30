import { 
  Sidebar, 
  SidebarContent, 
  SidebarGroup, 
  SidebarGroupContent,
  SidebarMenu, 
  SidebarMenuItem, 
  SidebarMenuButton,
  SidebarTrigger
} from "@/components/ui/sidebar";
import { type PrincipleContent } from "@/data/principles";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";

interface PrinciplesSidebarProps {
  principles: PrincipleContent[];
  selectedPrinciple: PrincipleContent;
  onPrincipleSelect: (principle: PrincipleContent) => void;
}

export const PrinciplesSidebar = ({
  principles,
  selectedPrinciple,
  onPrincipleSelect,
}: PrinciplesSidebarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    console.log("PrinciplesSidebar mounted");
    console.log("Principles:", principles);
    console.log("Selected principle:", selectedPrinciple);
  }, [principles, selectedPrinciple]);

  const handlePrincipleClick = (principle: PrincipleContent) => {
    console.log("Principle clicked:", principle.title);
    onPrincipleSelect(principle);
    setIsOpen(false); // Close sidebar on mobile after selection
  };

  return (
    <div className="relative">
      <div className="fixed top-20 left-4 z-50 md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-center w-10 h-10 bg-background border border-border rounded-md hover:bg-accent transition-colors"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>
      
      <div className={`${
        isOpen ? 'fixed inset-0 bg-background/80 backdrop-blur-sm z-40' : 'hidden'
      } md:hidden`} onClick={() => setIsOpen(false)} />
      
      <div className={`
        fixed left-0 top-16 w-64 h-[calc(100vh-4rem)] bg-background border-r border-border z-50
        transform transition-transform duration-200 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        md:translate-x-0 md:static md:h-full md:w-64
      `}>
        <SidebarContent className="h-full">
          <SidebarGroup className="h-full">
            <SidebarGroupContent className="w-full py-4">
              <SidebarMenu className="max-h-[calc(100vh-8rem)] overflow-y-auto px-4 flex flex-col mt-16 md:mt-0">
                {principles.map((principle) => (
                  <SidebarMenuItem key={principle.id}>
                    <SidebarMenuButton
                      onClick={() => handlePrincipleClick(principle)}
                      isActive={selectedPrinciple.id === principle.id}
                      className="text-sm py-2 w-full hover:bg-accent transition-colors rounded-md px-3"
                    >
                      <span className="truncate">{principle.title}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </div>
    </div>
  );
};