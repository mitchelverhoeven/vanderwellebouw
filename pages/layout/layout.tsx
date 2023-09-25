import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode } from "react";
import MainHeader from "./main-header";

export default function Layout(props: { children: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; }) {
    return (
        <>
        <MainHeader />
        <main>
            {props.children}
        </main>
        </>
    );
}



