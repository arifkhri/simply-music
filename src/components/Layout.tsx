import { Roboto } from "next/font/google";

const font = Roboto({
  weight: '400',
  subsets: ['latin'],
});


export default function RootLayout({ children }) {
  return (
    <main>
      <div className={`${font.className} mx-auto max-w-sm main h-screen`}>
        {children}
      </div>
    </main>
  )
}
