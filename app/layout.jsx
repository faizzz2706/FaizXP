import "./globals.css";
import {OSProvider} from "../context/OSContext"

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body>
        <OSProvider>
          {children}
        </OSProvider>
      </body>
    </html>
  );
}
