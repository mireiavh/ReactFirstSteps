import "./BttnDownload.css"

/*const BttnDownload = ( {className,content} ) => {
    return (
      <div>
        <button className={className}>{content}</button>
      </div>
    )
  }*/

const BttnDownload = ( button ) => {
    return (
        <button className={button.className}>{ button.content }</button>
    )
  }


/*<button className="bttnDownload" id={button.id}> {button.content }</button>
    button={
    content:"download",
    className:"btn"
}*/

  
  export default BttnDownload;