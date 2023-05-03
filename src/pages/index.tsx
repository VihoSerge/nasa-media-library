import Layout from "@/components/ui/layout";
import { Outlet } from "react-router-dom";

export default function RootPage() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}
