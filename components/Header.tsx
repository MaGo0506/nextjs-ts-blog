import Link from "next/link";
import Image from "next/image";

const Header = () => {
    return (
        <header
            className="flex items-center justify-between
            space-x-2 font-bold px-10 py-5"
        >
            <div className="flex items-center space-x-2">
                <Link href="/">
                    <Image
                        className="rounded-full"
                        height={50}
                        width={50}
                        src="/zvelte-logo.png"
                        alt="Logo"
                    />
                </Link>
                <h1>ZVELTE</h1>
            </div>

            <div>
                <Link
                    href="/"
                    className="px-5 py-3 text-xm md:text-base bg-[#484fd9] text-white
                    flex items-center rounded-full text-center"
                >
                    Sign up for my newsletter
                </Link>
            </div>
        </header>
    );
}

export default Header