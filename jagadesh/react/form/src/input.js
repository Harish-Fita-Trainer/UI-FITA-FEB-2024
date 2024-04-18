export default function get(Props)  {
const {type,onChange,id,name,value}=Props;

return <div>
     
    <input type={type} value={value} onChange={onChange} id={id} name={name}/>
</div>


}