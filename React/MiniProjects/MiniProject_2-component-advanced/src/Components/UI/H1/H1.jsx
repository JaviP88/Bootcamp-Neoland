import './H1.css'

const H1 = ({keyText, text}) => {
    const completeText = `${keyText}: ${text}`

    return(
        {keyText} == 'undefined' ?
        <h1>{text}</h1> :
        <h1>{completeText}</h1>
    )
}

export default H1