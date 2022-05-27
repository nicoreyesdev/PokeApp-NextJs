import { Container, Image, Text } from '@nextui-org/react';

export const NoFavorites = () => {
  return (
    <Container css={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: 'calc(100vh - 100px)',
        alignSelf: 'center'
      }} >
        <Text h2>No hay Favoritos</Text>
        <Image
          src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/6.svg'
          width={250}
          height={250}
          alt='No hay Favoritos'
          css={{opacity:0.2}}
        />
      </Container>
  )
}
