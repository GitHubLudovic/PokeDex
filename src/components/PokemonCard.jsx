function PokemonCard (props) {

    return (
<figure>
    {
        props.pokemon.imgSrc ? 
    <img src={props.pokemon.imgSrc}
        alt = {props.pokemon.name}/>
   : <p>???</p>
    }
    
</figure>
    
    );
    
}

export default PokemonCard;

