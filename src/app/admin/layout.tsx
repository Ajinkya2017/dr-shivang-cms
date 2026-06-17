"use client";

import { signOut } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, FileText, Rss, LogOut } from "lucide-react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // Do not show the sidebar on the login page itself
  if (pathname === "/admin/login") {
    return <>{children}</>;
  }

  const navItems = [
    { name: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
    { name: "Articles", href: "/admin/articles", icon: FileText },
    { name: "News", href: "/admin/news", icon: Rss },
  ];

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#f9fafb" }}>
      {/* SIDEBAR */}
      <aside style={{ width: "260px", background: "#083b2c", color: "white", display: "flex", flexDirection: "column" }}>
        <div style={{ padding: "30px 20px", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
          <h2 style={{ fontSize: "20px", fontFamily: "Georgia, serif", margin: 0, color: "#c59b3b" }}>Dr. Shivang</h2>
          <p style={{ fontSize: "13px", opacity: 0.7, margin: "5px 0 0 0" }}>Content Management</p>
        </div>

        <nav style={{ flex: 1, padding: "20px 15px", display: "flex", flexDirection: "column", gap: "10px" }}>
          {navItems.map((item) => {
            const isActive = pathname.startsWith(item.href);
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                href={item.href}
                style={{
                  display: "flex", alignItems: "center", gap: "12px", padding: "12px 16px",
                  borderRadius: "8px", textDecoration: "none",
                  background: isActive ? "rgba(255,255,255,0.1)" : "transparent",
                  color: isActive ? "#ffffff" : "#d1e8df",
                  fontWeight: isActive ? 600 : 400,
                  transition: "all 0.2s"
                }}
              >
                <Icon size={20} />
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div style={{ padding: "20px 15px", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
          <button
            onClick={() => signOut({ callbackUrl: "/admin/login" })}
            style={{
              display: "flex", alignItems: "center", gap: "12px", width: "100%", padding: "12px 16px",
              background: "transparent", border: "none", color: "#fca5a5", cursor: "pointer",
              fontSize: "15px", textAlign: "left", borderRadius: "8px"
            }}
          >
            <LogOut size={20} />
            Sign Out
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <main style={{ flex: 1, padding: "40px 60px", overflowY: "auto" }}>
        {children}
      </main>
    </div>
  );
}