import CommenBanner from "./CommenBanner";
import { montserrat } from "../layout";

export default function Layout({ children }: { children: React.ReactNode }) {
  
  return (
    <main className={montserrat.className}>
      <CommenBanner />
      {children}
    </main>
  );
}
