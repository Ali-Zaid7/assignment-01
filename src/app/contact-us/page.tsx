{/* <a> Tag: Causes a full page reload, which involves sending a new request to the server.
<Link> Tag: Does not cause a full page reload, enabling faster transitions and a better user experience by leveraging client-side routing. */}

import Link from 'next/link';

export default function Appdev() {
    return (
        <div className="text-center">
            <div className='text-7xl'>Feel free to contact at contact@gmail.com</div>
            <Link href="/app-devt" passHref>
                <button className="bg-green-500 text-7xl">App Development Services</button>
            </Link>
            <Link href="/web-devt" passHref>
                <button className="bg-yellow-500 text-7xl">Web Development Services</button>
            </Link>
        </div>
    );
}
