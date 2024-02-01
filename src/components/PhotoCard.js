let card = [
    {
        url:"https://source.unsplash.com/250x250/?dog?13",
        name:"Julie's Rabbit Ears"
    },
    {
        url:"https://source.unsplash.com/250x250/?dog?3",
        name:"The Innocent Look"
    },
    {
        url:"https://source.unsplash.com/250x250/?dog?4",
        name:"Big Eyed Buggy"
    },
    {
        url:"https://source.unsplash.com/250x250/?dog?1",
        name:"The Saint Doggo"
    },
    {
        url:"https://source.unsplash.com/250x250/?dog?5",
        name:"Julie's Rabbit Ears"
    },
    {
        url:"https://source.unsplash.com/250x250/?dog?6",
        name:"The Innocent Look"
    },
    {
        url:"https://source.unsplash.com/250x250/?dog?7",
        name:"Julie's Rabbit Ears"
    },
    {
        url:"https://source.unsplash.com/250x250/?dog?8",
        name:"The Innocent Look"
    }   
]


function PhotoCard(props){
    return (
        <div class="photo-card">
            <img src={props.url} alt="img"></img>
            <p>{props.name}</p>
        </div>
    )
}

export default PhotoCard
export {card}
