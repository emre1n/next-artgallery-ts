import SideMenu from '../../components/dashboard/SideMenu';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex">
      <SideMenu />

      {children}
    </section>
  );
}
