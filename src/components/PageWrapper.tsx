export function PageWrapper(props) {
    return(
        <div className="min-h-dvh bg-linear-to-b from-pink-300 to-pink-100 to-[60vh]">
            {props.children}
        </div>
    )
}