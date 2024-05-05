import Card from './Card.js'
function Tour({locations,removeHandler}){
    return(
        <div>
        {locations.map((location) => {

           return <Card key={location.id}  {...location} removeHandler={removeHandler}></Card>
        })}
        </div>
    )
}
export default Tour;