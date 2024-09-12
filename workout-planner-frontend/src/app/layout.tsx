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
function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
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

  console.log(bodyHeight)

  return (
    <html lang="en">
      <Analytics />
      <div className='flex flex-col'>
        <body
          style={{ minHeight: `${bodyHeight}px` }}
          className={cn(
            `antialiased flex-grow`,
            fontHeading.variable,
            fontBody.variable
          )}
        >
          {children}
        </body>
        <Footer setFooterHeight={handleSetHeight} />
      </div>
    </html>
  )
}