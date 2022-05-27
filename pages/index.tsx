import type { NextPage } from 'next'
import { Layout } from '../components/layouts/Layout';
import { GetStaticProps } from 'next'
import {pokeApi} from '../api';
import { PokemonResponse, SmallPokemon } from '../interfaces';
import {Grid} from '@nextui-org/react';
import { PokemonCard } from '../components/pokemon/PokemonCard';


interface Props  {
    pokemons: SmallPokemon[];
}

const HomePage: NextPage<Props> = ({pokemons}) => {

  return (
    <>
    <Layout title='Listado de Pokemons'>
      <Grid.Container gap={5} justify='flex-start'>
          {
            pokemons.map((pokemon) => (
            <PokemonCard pokemon={pokemon} key={pokemon.id} />
              ))
          }
        </Grid.Container>
    </Layout>
      
    </>
  )
}



export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonResponse>('/pokemon?limit=151');

  const pokemons: SmallPokemon[] = data.results.map((poke, i) => ({
      ...poke,
      id: i + 1,
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i + 1}.svg`
  }));

  return {
    props: {
      pokemons
    }
  }
}

export default HomePage;
