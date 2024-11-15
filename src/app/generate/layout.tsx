import { AppSidebar } from "@/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { FlaskConical, Home } from "lucide-react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-1">
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset className="p-1">
          <header className="flex h-16 shrink-0 items-center gap-2">
            <div className="px- flex items-center gap-2">
              <SidebarTrigger />
              <Separator orientation="vertical" className="mr-2 h-4" />
              <Breadcrumb className="">
                <BreadcrumbList>
                  <BreadcrumbItem className="block">
                    <BreadcrumbLink
                      className="flex items-center gap-1 hover:text-white"
                      href="/"
                    >
                      Pixura
                      <Home className="size-[.9rem]" />
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className="block" />
                  <BreadcrumbItem>
                    <BreadcrumbPage className="flex items-center gap-1 text-white">
                      Lab
                      <FlaskConical className="size-[.9em]" />
                    </BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </header>
          <div className="flex flex-1 flex-col gap-4 rounded-[calc(1.5rem-8px)] bg-black p-4 pt-0 text-white">
            {children}
          </div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
}
