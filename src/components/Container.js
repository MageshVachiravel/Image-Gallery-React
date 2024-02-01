import PhotoCard from "./PhotoCard"
import { card } from "./PhotoCard"

function Container(){
    return (
        <div class="container">
            {
                card.map((items)=>{
                    return(
                        <PhotoCard url={items.url} name={items.name}></PhotoCard>
                    )
                })
            }
        </div>
    )
}

export default Container