import Image from "next/image";

const Logo = (props: any) => {
    const {renderDefault, title} = props;

    return (
        <div className="flex items-center space-x-2">
            <Image
                className="rounded-full"
                height={50}
                width={50}
                src="/zvelte-logo.png"
                alt="Logo"
            />
            {renderDefault && <>{renderDefault(props)}</>}
        </div>
    );
}

export default Logo