// This is the root layout component for your Next.js app.
// Learn more: https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#root-layout-required
"use client"
import { Manrope } from 'next/font/google'
import { cn } from '@/lib/utils'
import './globals.css'
import { Analytics } from "@vercel/analytics/react"
import Footer from '@/components/Footer'
import { useEffect, useState } from 'react'

const fontHeading = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
})

const fontBody = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
})

type Props = {
  children: string | JSX.Element | JSX.Element[]
}

// Function to safely get window dimensions on client-side
function getWindowDimensions() {
  if (typeof window !== 'undefined') {
    const { innerWidth: width, innerHeight: height } = window;
    return { width, height };
  }
  return { width: 0, height: 0 }; // Default for server-side
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}


export default function Layout({ children }: Props) {
  const { height: windowHeight } = useWindowDimensions();
  const [componentHeight, setComponentHeight] = useState(0);

  const handleSetHeight = (height: number) => {
    setComponentHeight(height); // Update the parent state with the child's height
  };

  const bodyHeight = windowHeight - componentHeight


  return (
    <html lang="en">
      <Analytics />
      <body

        className={cn(
          `antialiased flex-grow`,
          fontHeading.variable,
          fontBody.variable
        )}
      >
        <div className='flex flex-col'>
          <div style={{ minHeight: `${bodyHeight}px`, paddingBottom: "48px" }}>

            {children}
          </div>
          <Footer setFooterHeight={handleSetHeight} />
        </div>
      </body>

    </html>
  )
}