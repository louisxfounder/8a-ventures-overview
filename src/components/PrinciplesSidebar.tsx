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
    <Sidebar>
      <div className="fixed top-4 left-4 z-50 md:hidden">
        <SidebarTrigger onClick={() => setIsOpen(!isOpen)}>
          <Menu className="h-6 w-6" />
        </SidebarTrigger>
      </div>
      <SidebarContent className={`${isOpen ? 'block' : 'hidden'} md:block`}>
        <SidebarGroup className="h-[calc(100vh-4rem)] flex items-center">
          <SidebarGroupContent className="w-full py-8 md:py-16">
            <SidebarMenu className="max-h-[80vh] overflow-y-auto px-2 flex flex-col">
              {principles.map((principle) => (
                <SidebarMenuItem key={principle.id}>
                  <SidebarMenuButton
                    onClick={() => handlePrincipleClick(principle)}
                    isActive={selectedPrinciple.id === principle.id}
                    className="text-sm py-2 w-full hover:bg-accent transition-colors"
                  >
                    <span className="truncate">{principle.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};