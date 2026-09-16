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
                flex
                items-center
                gap-4
                overflow-hidden
                rounded-xl
                px-5
                py-3
                transition-all
                duration-200
                active:scale-95

                ${
                    isActive
                        ? "bg-white/10 text-white font-semibold"
                        : "text-white/70 hover:bg-white/5 hover:text-white"
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
                            duration-300

                            ${
                                isActive
                                    ? "bg-accent"
                                    : "bg-transparent group-hover:bg-accent/50"
                            }
                        `}
                    />

                    {/* Icono */}
                    <Icon
                        size={20}
                        className={`
                            transition-transform
                            duration-300
                            group-hover:scale-110
                            ${isActive ? "text-accent" : ""}
                        `}
                    />

                    {/* Texto */}
                    <span
                        className="
                            text-[15px]
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