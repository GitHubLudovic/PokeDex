function PokemonCard (props) {

    return (
<figure>
    {
        props.pokemonProp.imgSrc ? 
    <img src={props.pokemonProp.imgSrc}
        alt = {props.pokemonProp.name}/>
   : <p>???</p>
    }
    
</figure>
    
    );
    
}

export default PokemonCard;

