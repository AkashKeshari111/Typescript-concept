
import { getApi, postApi } from '../Api/FetchApi';
import { useFetch } from '../Hooks/useFetch';






const Fetching = () => {
 const {loading,error,data}=useFetch(getApi)

 const {loading:l1,error:e1,data:d1,getData}=useFetch(postApi)

  return (
<div>
  
    <button onClick={()=>getData({title:"PK",gender:"male"})}>Click</button>
    {(loading || l1) && <div>Loading .......</div>}
    {(error || e1) &&  <div>Error .......</div>}
{(data || d1) && <div>{(data || d1).map((el)=>(<div key={el.id}>{el.title}</div>))}</div>}
    
    
    
</div>
  )
}

export default Fetching