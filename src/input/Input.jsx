

export default function Input(props){
    return(
        <input 
                  type="number" 
                  name="" 
                  id="passwordSize" 
                  min={4} 
                  max={50}
                  value={props.passwordSize} 
                  onChange={(ev) => props.setPasswordSize(ev.target.value)}
                  />
    )
}