import { ReactNode } from "react";

interface Props{
    children?: ReactNode;
}

function NavBar({children}: Props){

    return(
        <>
            <div className="z-[2] bg-[#ffe788] w-[100vw] h-[1vh]"></div>
            <div className="z-[2] bg-[#ffcc00] w-[100vw] flex">
                {children}
            </div>
        </>
    )

}

export default NavBar;