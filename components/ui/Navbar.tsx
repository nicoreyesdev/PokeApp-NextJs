import { Link, Spacer, Text, useTheme } from "@nextui-org/react"
import Image from "next/image"
import NextLink from "next/link"


export const Navbar = () => {

    const {theme} = useTheme()

  return (
    <div style={{
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'start',
        padding: '0px 20px',
        backgroundColor: theme?.colors.gray800.value
    }}>

        <Image
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/6.svg"
            alt="pokemon image"
            width={50}
            height={50}
        />
        <NextLink href="/" passHref>
          <Link>
            <Text color="white" h2>P</Text>
            <Text color="white" h3>okemon</Text>
          </Link>
        </NextLink>
        <Spacer css={{ flex: 1}}/>
        <NextLink href="/favoritos" passHref>
          <Link css={{marginRight: '10px'}}>
        <Text color="white" >Favoritos</Text>
        </Link>
        </NextLink>
    </div>
  )
}
