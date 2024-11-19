import Link from "next/link";

export default function Webdev() {
    return (
  <body><div className="text-center text-4xl">
      <div>We provide top-notch Web development services.</div>
      <Link href="/contact-us" passHref><button className="bg-yellow-500 ">Web Development Services</button></Link>
      </div></body>
    )
  } 
  