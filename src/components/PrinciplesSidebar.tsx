import { 
  Sidebar, 
  SidebarContent, 
  SidebarGroup, 
  SidebarGroupContent,
  SidebarMenu, 
  SidebarMenuItem, 
  SidebarMenuButton,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Menu } from "lucide-react";
import { type PrincipleContent } from "@/data/principles";

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
  console.log('Rendering PrinciplesSidebar with selected principle:', selectedPrinciple.id);
  
  return (
    <>
      <div className="md:hidden fixed top-4 left-4 z-50">
        <SidebarTrigger>
          <Menu className="h-6 w-6" />
        </SidebarTrigger>
      </div>
      
      <Sidebar>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent className="w-full py-6 md:py-8">
              <SidebarMenu className="max-h-[calc(100vh-8rem)] overflow-y-auto px-2 flex flex-col gap-1">
                {principles.map((principle) => (
                  <SidebarMenuItem key={principle.id}>
                    <SidebarMenuButton
                      onClick={() => {
                        console.log('Principle selected:', principle.id);
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
    </>
  );
};