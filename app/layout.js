import './globals.css'

export const metadata = {
  title: 'Abigail Kaye Unating',
  description: 'My Web Portfolio',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className='font-inter bg-background text-font-color'>
        {children}
      </body>
    </html>
  )
}
