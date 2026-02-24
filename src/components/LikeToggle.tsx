import { Heart } from "lucide-react";
import * as React from "react";

export function LikeToggle() {
    const [isLiked, setIsLiked] = React.useState(false); // [state value, state setter function]
    const [count, setCount] = React.useState(0);

    function handleClick() {
        setIsLiked(!isLiked)
        setCount((prevCount) => prevCount + 1)
        setCount((prevCount) => prevCount + 1)
        setCount((prevCount) => prevCount + 1)
        console.log(count)
        // data state persists when react re-renders
    }

    return(
        <button className="group flex items-center gap-1 " onClick={handleClick}>
            <Heart className={
                    isLiked
                    ? "fill-pink-500 stroke-none"
                    : "stroke-slate-200 group-hover:stroke-slate-300"
                }/>
            <span>{count}</span>
        </button>
    )
}