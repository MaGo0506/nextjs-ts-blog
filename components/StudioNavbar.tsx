import { ArrowUturnLeftIcon} from "@heroicons/react/24/solid";
import Link from "next/link";

const StudioNavbar = (props: any) => {
    return (
        <div>
            <div>
               <Link href="/" className="text-[#484fd9] flex items-center p-5">
                   <ArrowUturnLeftIcon className="h-6 w-6 text-[#484fd9] mr-2"/>
                   Go to the website
               </Link>
            </div>
            <>{props.renderDefault(props)}</>
        </div>
    );
}

export default StudioNavbar