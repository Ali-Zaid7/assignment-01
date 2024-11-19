import Link from 'next/link'

export default function Home() {
  return (
    <div className="text-center text-9xl">
      <h1>
      <Link href="/about" passHref><div>About </div></Link>
      <Link href="/contact-us" passHref><div>Contact Us</div></Link>
      <Link href="/services" passHref><div>Services</div></Link>
      </h1>
    </div>
  )
}
