import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo.png";

const logoStyle = {
    width: 100,
};

export default function Home() {
    return (
        <>
            {/* <nav className="flex justify-center items-center">
                <div className="w-2/12">
                    <Image src={logo} alt="Golden Touch Stories Logo" />
                </div>
                <div className=" w-8/12 pt-3 ">
                    <Link href="/" className="justify-center">
                        Goldentouchstories
                    </Link>

                    <div className=" justify-center space-x-5 pt-3">
                        <Link href="/cv">CV</Link>
                        <Link href="/about-us">About Us</Link>
                        <Link href="/contact-us">Contact</Link>
                    </div>
                </div>
            </nav> */}
            <nav className="flex items-center w-8/12 ml-2 mr-2">
                <div className="w-2/12">
                    <Image src={logo} alt="Golden Touch Stories Logo" />
                </div>
                <div className="w-8/12 text-center">
                    <h1 className="text-2xl font-bold mb-3">
                        Goldentouchstories
                    </h1>
                    <div className="flex justify-center space-x-5">
                        <Link href="/cv">CV</Link>
                        <Link href="/about-us">About Us</Link>
                        <Link href="/contact-us">Contact</Link>
                    </div>
                </div>
            </nav>

            <main>
                <div>inja main hast...</div>
            </main>
            <footer>inja ham footer</footer>
        </>
    );
}
