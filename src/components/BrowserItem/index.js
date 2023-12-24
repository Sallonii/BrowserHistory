import './index.css'

const BrowserItem = props => {
  const {eachHistoryDetails, deleteHistory} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = eachHistoryDetails

  const deleteButton = () => {
    deleteHistory(id)
  }

  return (
    <li className="list-style">
      <div className="list-items">
        <p className="time"> {timeAccessed} </p>
        <div className="delete-btn-and-logo-alignment">
          <div className="logo-details">
            <img src={logoUrl} alt="domain logo" className="logo" />
            <div className="title-and-domain">
              <p className="title"> {title} </p>
              <p className="domain-url"> {domainUrl} </p>
            </div>
          </div>
          <button
            type="button"
            className="delete-btn1"
            data-testid="delete"
            onClick={deleteButton}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
              alt="delete"
            />
          </button>
        </div>
      </div>
      <button
        type="button"
        className="delete-btn2"
        data-testid="delete"
        onClick={deleteButton}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}
export default BrowserItem
