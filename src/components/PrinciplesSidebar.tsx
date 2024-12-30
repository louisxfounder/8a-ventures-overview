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
  return (
    <Sidebar>
      <div className="md:hidden absolute top-4 left-4 z-50">
        <SidebarTrigger>
          <Menu className="h-6 w-6" />
        </SidebarTrigger>
      </div>
      <SidebarContent>
        <SidebarGroup className="h-[calc(100vh-4rem)] flex items-center">
          <SidebarGroupContent className="w-full py-16 md:py-24">
            <SidebarMenu className="max-h-full overflow-y-auto px-2 flex flex-col">
              {principles.map((principle) => (
                <SidebarMenuItem key={principle.id}>
                  <SidebarMenuButton
                    onClick={() => onPrincipleSelect(principle)}
                    isActive={selectedPrinciple.id === principle.id}
                    className="text-sm py-2 w-full hover:bg-accent"
                  >
                    <span>{principle.title}</span>
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