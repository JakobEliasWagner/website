export const metadata = {
  title: 'Jakob Elias Wagner',
  description: 'Exploring the boundary between ML and Engineering',
}

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
