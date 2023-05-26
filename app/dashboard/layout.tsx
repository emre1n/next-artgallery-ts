import SideMenu from '../../components/dashboard/SideMenu';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex">
      {/* Include shared UI here e.g. a header or sidebar */}
      <SideMenu />

      {children}
    </section>
  );
}
