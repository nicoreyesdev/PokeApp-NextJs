
import { Grid } from '@nextui-org/react';
import { Layout } from '../../components/layouts/Layout'
import { NoFavorites } from '../../components/ui/NoFavorites';
import { useEffect, useState } from 'react';
import { localFavorites } from '../../utils';

import { PokemonCardFavorite } from '../../components/pokemon/PokemonCardFavorite';

const FavoritosPage = () => {
  
  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([])
  
  useEffect(() => {
    setFavoritePokemons(localFavorites.pokemons())
  }, [])


  return (
    <Layout title='Pokemons Favoritos'>
        
        {
          favoritePokemons.length === 0 
          ? (<NoFavorites/>) 
          :(
            <Grid.Container gap={2} direction='row' justify='flex-start'>
              {
                favoritePokemons.map((id) => (
                  <PokemonCardFavorite pokemonId={id} key={id}/>
                ))
              }
              </Grid.Container>
          )
        }
        
        
    </Layout>
  )
}

export default FavoritosPage;
