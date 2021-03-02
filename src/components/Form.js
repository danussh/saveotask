import React,{useState,useEffect} from 'react'
const Form = (props) => {
    // const [button,setButton]=useState(true)
 const [input, setInput] = useState({
   location: "",
   latitude: "",
   longitude:""
 });
  const onChangeHandle = (e) => {
    setInput({ ...input, [e.target.id]: e.target.value });
  };
  const onSubmit=(e)=>{
      e.preventDefault();
      props.add(input)
      
  }
    return (
      <div className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label>Location Name</label> <br />
            <input
              type="text"
              id="location"
              placeholder="Location"
              onChange={onChangeHandle}
            />
          </div>
          <div className="form-group">
            <label>Enter Latitute</label> <br />
            <input
              type="text"
              id="latitude"
              placeholder="Lat"
              onChange={onChangeHandle}
            />
          </div>
          <div className="form-group">
            <label>Enter Longitude</label> <br />
            <input
              type="text"
              id="longitude"
              placeholder="Long"
              onChange={onChangeHandle}
            />
          </div>
            <button type="submit" className="submit">
              Submit
            </button>
        </form>
      </div>
    );
}

export default Form
