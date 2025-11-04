import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'La Fiesta Mexican Restaurant & Lounge — Demo',
  description: 'Modern one‑page website demo for La Fiesta Mexican Restaurant & Lounge (La Grande, OR)',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
