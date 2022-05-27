import Head from "next/head"
import { FC, PropsWithChildren } from "react"
import { Navbar } from "../ui";

interface Props  {
    children: React.ReactNode;
    title?: string;
}

export const Layout: FC<PropsWithChildren<Props>> = ({children, title}) => {
  return (
    <>
        <Head>
            <title>{title || 'Pokemon App'}</title>
            <meta name="author" content="Nico Reyes" />
            <meta name="description" content="Informacion sobre Pokemon" />
            <meta name="keywords" content="pokemon, pokedex, charizard" />
        </Head>
        <Navbar />
        <main style={{
            padding: '0px 20px'
        }}>
            {children}
        </main>

    </>
  )
}
