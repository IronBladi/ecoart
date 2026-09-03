import {
    FiStar,
} from "react-icons/fi";

interface Props {

    value: number;

    onChange: (
        value: number
    ) => void;

    disabled?: boolean;

}

const CatalogRating = ({
    value,
    onChange,
    disabled = false,
}: Props) => {

    return (

        <div
            className="
                flex
                items-center
                justify-center
                gap-3
            "
        >

            {[1, 2, 3, 4, 5].map((star) => (

                <button
                    key={star}
                    type="button"
                    disabled={disabled}
                    onClick={() => onChange(star)}
                    className="
                        transition
                        duration-200
                        hover:scale-110
                        disabled:cursor-not-allowed
                        disabled:opacity-60
                    "
                >

                    <FiStar
                        className={`
                            h-9
                            w-9
                            transition-colors
                            ${
                                star <= value
                                    ? "fill-yellow-400 text-yellow-400"
                                    : "text-gray-300"
                            }
                        `}
                    />

                </button>

            ))}

        </div>

    );

};

export default CatalogRating;