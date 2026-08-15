import { MirrorBanner } from "@/components/school/MirrorBanner"
import { SchoolNav } from "@/components/school/SchoolNav"

export default function SchoolPortalLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <MirrorBanner />
      <SchoolNav />
      <main className="min-h-screen bg-slate-50">{children}</main>
    </>
  )
}
