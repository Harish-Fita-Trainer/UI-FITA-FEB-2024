export default function Int({ type = "text", text, onChange, value }) {

    return <div className="form-control">
        <label className="form-label">{text}</label>
        <input className="form-input" type={type} onChange={onChange} value={value} />
    </div>
}