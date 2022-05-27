import { GetStaticProps, NextPage } from 'next';
import { pokeApi } from '../../api';
import { Layout } from '../../components/layouts/Layout'
import { Pokemon } from '../../interfaces';
import { GetStaticPaths } from 'next'
import { localFavorites } from '../../utils';
import { Button, Card, Container, Grid, Text, Image } from '@nextui-org/react';
import { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { PokemonResponse } from '../../interfaces/pokemon-list';


interface Props {
  pokemon: Pokemon;
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {


    const [isInFavorites, setIsInFavorites] = useState( false );

    useEffect(() => {
        setIsInFavorites(localFavorites.existInFavorites( pokemon.id ))
    }, [])
    
    // console.log(pokemon);
    const onToggleFavorite = () => {
      localFavorites.toggleFavorite( pokemon.id );
      setIsInFavorites( !isInFavorites );

      if(!isInFavorites) {
        confetti({
          zIndex: 999,
          particleCount: 300,
          spread: 160,
          angle: -100,
          colors: ['#B20600', '#F32424'],
          origin: {
            x: 1,
            y: 0
          },
        })
      }

    }  

    
    return (
        <Layout title={ pokemon.name }>
           
           <Grid.Container css={{ marginTop: '5px' }} gap={ 2 }>
              <Grid xs={ 12 } sm={ 4 } >
                <Card bordered hoverable css={{ padding: '30px', backgroundColor:'$gray800' }}>
                    <Card.Body>
                      <Card.Image 
                        src={ pokemon.sprites.other?.dream_world.front_default || '/no-image.png' }
                        alt={ pokemon.name }
                        width="100%"
                        height={ 200 }
                      />
                    </Card.Body>
                </Card>
              </Grid>

              <Grid xs={ 12 } sm={ 8 }>
                <Card bordered css={{backgroundColor:'$gray800'}}>
                  <Card.Header css={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Text h1 transform='capitalize'>{ pokemon.name }</Text>
                    <Button
                      color="error"
                      ghost={ !isInFavorites }
                      onClick={ onToggleFavorite }
                    >
                      {(isInFavorites) ? 'En Favoritos' :'Guardar en Favoritos' }
                    </Button>
                  </Card.Header>

                  <Card.Body>
                    <Text size={30}>Sprites:</Text>

                    <Container direction='row' display='flex' gap={ 0 }>
                        <Image 
                          src={ pokemon.sprites.front_default }
                          alt={ pokemon.name }
                          width={ 100 }
                          height={ 100 }
                        />
                        <Image 
                          src={ pokemon.sprites.back_default }
                          alt={ pokemon.name }
                          width={ 100 }
                          height={ 100 }
                        />
                        <Image 
                          src={ pokemon.sprites.front_shiny }
                          alt={ pokemon.name }
                          width={ 100 }
                          height={ 100 }
                        />
                        <Image 
                          src={ pokemon.sprites.back_shiny }
                          alt={ pokemon.name }
                          width={ 100 }
                          height={ 100 }
                        />

                    </Container>


                  </Card.Body>  


                </Card>
              </Grid>

           </Grid.Container>



        </Layout>
    )
};



export const getStaticPaths: GetStaticPaths = async (ctx) => {

  const pokemons151 = [...Array(151)].map( ( value, index ) => `${ index + 1 }` );

  return {
    paths: pokemons151.map( id => ({
      params: { id }
    })),
    fallback: false
  }
}



export const getStaticProps: GetStaticProps = async ({ params }) => {
  
  const { id } = params as { id: string };
  const { data } = await pokeApi.get<Pokemon>(`/pokemon/${id}`);
  const pokemon = {
    id: data.id,
    name: data.name,
    sprites: data.sprites
  }
  return {
    props: {
      pokemon
    }
  }
}





export default PokemonPage;