import './H2.css'

const H2 = ({keyText, text}) => {
    const completeText = `${keyText}: ${text}`
    
    return(
    <>
        {{keyText} == 'undefined'
        ? <h2>{text}</h2> 
        : <h2>{completeText}</h2>}
    </>
    )
}

export default H2