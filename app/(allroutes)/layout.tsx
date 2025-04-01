import CommenBanner from "./CommenBanner";
import { montserrat } from "../layout";



export default function RouthLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div>
             <CommenBanner/>
            <body className={montserrat.className}>{children}</body>
        </div>
    )
}