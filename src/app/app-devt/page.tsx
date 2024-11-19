import Link from 'next/link';

export default function Appdev() {
    return (
        <body className='text-center text-5xl'>
            <h1>We provide top notch services of App Development.</h1>
        <Link href="/contact-us" passHref>
            <button className='bg-blue-500'>App Development Services</button>
        </Link>
        </body>
    );
}
