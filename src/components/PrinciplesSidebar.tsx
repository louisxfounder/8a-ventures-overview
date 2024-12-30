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
import { useEffect } from "react";

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
  // Log when principles or selected principle changes
  useEffect(() => {
    console.log("Principles loaded:", principles);
    console.log("Selected principle:", selectedPrinciple);
  }, [principles, selectedPrinciple]);

  return (
    <Sidebar>
      <div className="fixed top-4 left-4 z-50 md:hidden">
        <SidebarTrigger>
          <Menu className="h-6 w-6" />
        </SidebarTrigger>
      </div>
      <SidebarContent>
        <SidebarGroup className="h-[calc(100vh-4rem)] flex items-center">
          <SidebarGroupContent className="w-full py-8 md:py-16">
            <SidebarMenu className="max-h-[80vh] overflow-y-auto px-2 flex flex-col">
              {principles.map((principle) => (
                <SidebarMenuItem key={principle.id}>
                  <SidebarMenuButton
                    onClick={() => {
                      console.log("Principle selected:", principle.title);
                      onPrincipleSelect(principle);
                    }}
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