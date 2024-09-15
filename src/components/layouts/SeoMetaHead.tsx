import Head from 'next/head'
import React from 'react'

type Props = {
  children?: React.ReactNode
  title: string
  description: string
  canonical: string
}
const sitename = process.env.NEXT_PUBLIC_SITENAME
export default function SeoMetaHead({
  title,
  description,
  canonical,
  children,
}: Props) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:sitename" content={sitename} />
      <meta property="og:url" content={canonical} />
      <link rel="canonical" key="canonical" href={canonical} />
      <link rel="canonical" key="canonical" href={canonical} />
      {children}
    </Head>
  )
}
