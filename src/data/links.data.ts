import { FaFacebook, FaLinkedinIn } from 'react-icons/fa'
import { LuInstagram } from 'react-icons/lu'
import { SiGlassdoor } from 'react-icons/si'

export const footer_links = [
  {
    title: 'Company',
    links: [
      { label: 'Our story', href: '#' },
      { label: 'FAQs', href: '#' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Terms of Service', href: '#' },
      { label: 'Privacy Policy', href: '#' },
      { label: 'Contact Us', href: '#' },
      { label: 'About Us', href: '#' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'SEO', href: '#' },
      { label: 'PPC Advertising', href: '#' },
      {
        label: '#',
        href: '#',
      },
      { label: 'Content Marketing', href: '#' },
      { label: 'Email Marketing', href: '#' },
      { label: 'Web Development', href: '#' },
    ],
  },
]

export const header_links = [
  {
    name: 'FAQs',
    href: '#',
  },
  {
    name: 'Pricing',
    href: '#',
  },
  {
    name: 'Our Story',
    href: '#',
  },
]

export const social_links = [
  {
    label: 'LinkedIn',
    href: '#',
    icon: FaLinkedinIn,
  },
  {
    label: 'Instagram',
    href: '#',
    icon: LuInstagram,
  },
  {
    label: 'Facebook',
    href: '#',
    icon: FaFacebook,
  },
  {
    label: 'Glassdoor',
    href: '#',
    icon: SiGlassdoor,
  },
]
