import {useCharacter} from "../hooks/useCharacter";
import "./Character.css";
import {useParams} from "react-router";

const Character = () => {

    const {id} = useParams()

    const { data, loading, error} = useCharacter(id);

    // console.log(error, loading, data)

    if(error) return <div>something went wrong!</div>

    if(loading) return <div>spinner</div>

    return (
        <div className="Character">
            <img src={data.character.image} width={750} height={750}/>
            <div className="Character-content">
                <h1>{data.character.name}</h1>
                <p>{data.character.gender}</p>
                <div className="Character-episode">
                    {data.character.episode.map(episode => {
                        return <div>
                            {episode.name} - <b>{episode.episode}</b>
                        </div>
                    }) }
                </div>
            </div>
        </div>
    );
};

export default Character;