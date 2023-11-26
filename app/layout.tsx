import type { Metadata } from 'next'

import './globals.css'

import { Roboto } from 'next/font/google'
import Head from 'next/head'



export const metadata: Metadata = {
  title: 'Next Weather App',
  description: 'Generated by create next app',
}

const roboto = Roboto({
  subsets: ["latin"],
  weight: ['700'],
  style: ['normal']
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"></meta>
      </Head>

      <body className={roboto.className} >{children}</body>
    </html>
  )
}
