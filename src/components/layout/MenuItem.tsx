import { NavLink } from "react-router-dom";
import type { IconType } from "react-icons";

interface Props {
    to: string;
    text: string;
    icon: IconType;
}

const MenuItem = ({
    to,
    text,
    icon: Icon,
}: Props) => {

    return (

        <NavLink
            to={to}
            className={({ isActive }) => `
                group
                relative
                mb-2
                flex
                items-center
                gap-4
                overflow-hidden
                rounded-xl
                px-5
                py-3
                transition-all
                duration-300

                ${
                    isActive
                        ? "bg-[#F2E8CF] text-[#386641] shadow-lg"
                        : "text-[#F2E8CF] hover:bg-[#4B7A54]"
                }
            `}
        >

            {({ isActive }) => (
                <>

                    {/* Indicador lateral */}

                    <span
                        className={`
                            absolute
                            left-0
                            top-2
                            h-8
                            w-1
                            rounded-r-full
                            transition-all

                            ${
                                isActive
                                    ? "bg-[#A7C957]"
                                    : "bg-transparent group-hover:bg-[#A7C957]"
                            }
                        `}
                    />

                    {/* Icono */}

                    <Icon
                        size={21}
                        className="
                            transition-transform
                            duration-300
                            group-hover:scale-110
                        "
                    />

                    {/* Texto */}

                    <span
                        className="
                            text-[15px]
                            font-medium
                            tracking-wide
                        "
                    >
                        {text}
                    </span>

                </>
            )}

        </NavLink>

    );

};

export default MenuItem;