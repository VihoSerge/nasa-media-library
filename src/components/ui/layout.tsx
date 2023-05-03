import Navbar from "./navbar";

export interface LayoutProps {
  children?: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="pb-8">
      <Navbar />
      <div className="px-8">{children}</div>
    </div>
  );
}
