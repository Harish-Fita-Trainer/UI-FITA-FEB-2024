
export default function Input({type,text, onChange, value }) {

    return <div className="form-control">
        <label>{text}</label>
        <input type={type} onChange={onChange} value={value} />
    </div>
}
