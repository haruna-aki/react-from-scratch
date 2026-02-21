export function Header() {
    return(
        <header>
            {/* logo */}
            <a className="group" href="/">
                <div className="inline-flex items-center gap-4">
                    <img 
                        src="../public/logo.svg"
                        alt="logo"
                        className="h-16 transition group-hover: scale-105
                        group-hover: -rotate-6 md:h-10 lg:h-15"
                    />
                    <p className="text-3xl font-normal font-['Girly_Personal']">FelineCare</p>
                </div>
            </a>
            {/* hero */}
            <div className="mt-6">
                <h1 className="text-lg font-bold font-['The_Girl_Next_Door']">We've got the best cats!</h1>
                <p className="text-slate-600">Don't take our word — let the pictures do the talking :)</p>
            </div>
        </header>
    )
}