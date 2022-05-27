import { Card, Col, Row, Button, Text, Grid } from "@nextui-org/react";
import { useRouter } from "next/router";
import { FC } from "react";
import { SmallPokemon } from '../../interfaces/pokemon-list';

interface Props  {
    pokemon: SmallPokemon;
}

export const PokemonCard:FC<Props> = ({pokemon}) => {
    
    const {id, name, img} = pokemon;
    const router = useRouter();
    const onClick = () => {
        router.push(`/pokemon/${id}`);
    }

    return (
        <Grid xs={6} sm={4} md={3} xl={2} key={id}>
            <Card hoverable clickable bordered onClick={onClick} css={{backgroundColor:'$gray800'}}>
            <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
            <Col>
                <Text size={20} weight="bold" transform="uppercase" color="#ffffffAA">
                #{id}
                </Text>
                
            </Col>
            </Card.Header>
            <Card.Body css={{p:1}}>
            <Card.Image
                src={img}
                height={200}
                width="100%"
                alt={name}
            />
            </Card.Body>
            <Card.Footer
            blur
            css={{
                position: "absolute",
                bgBlur: "#DDDDDD",
                borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                bottom: 0,
                zIndex: 1,
                height: 45,
            }}
            >
            <Row justify="center">
            
                <Text h3 color="#ffffffAA" >
                {name.charAt(0).toUpperCase() + name.slice(1)}
                </Text>
            </Row>
            </Card.Footer>
        </Card>
    </Grid>
    
);
  
}
