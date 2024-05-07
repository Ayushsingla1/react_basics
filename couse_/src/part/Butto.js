import './Butto.css';
function Bars({filterData , category ,setcategory}){
    function categoryhandler(id){
        setcategory(id);
    }
    return (
        <div className="filters">
            {filterData.map((element)=>{
                return <button key={element.id} onClick={()=>categoryhandler(element.title)}>{element.title}</button>
            })}
        </div>
    )
}
export default Bars;