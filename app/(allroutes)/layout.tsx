import CommenBanner from "./CommenBanner";
import { montserrat } from "../layout";



export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body
          className={montserrat.className}>
  
          <CommenBanner/>
          {children}
        </body>
      </html>
       
    )
}