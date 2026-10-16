import { redirect } from "next/navigation";
import { getSession } from "@/actions/auth";
import { AdminSidebar } from "@/components/admin/AdminSidebar";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();

  if (!session.user) {
    redirect("/admin/login");
  }

  return (
    <div className="admin-root flex h-screen overflow-hidden bg-background">
      {/* Sidebar - Hidden on mobile, shown on md+ */}
      <aside className="hidden md:block">
        <AdminSidebar
          user={{
            name: session.user.name,
            email: session.user.email,
          }}
        />
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">{children}</main>
    </div>
  );
}
