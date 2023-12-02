import PropTypes from 'prop-types';
import markerIcon from '../assets/marker.svg';
import "../styles/Card.css";

function Card(props) {
  return (
    <>
      <article className="card">
        <aside>
          <img className='card--travel-img' src={props.item.imageUrl} alt="" />
        </aside>
        <main>
          <div className='card--header-wrapper'>
            <img className='card--marker-icon' src={markerIcon} alt="" />
            <h4>{props.item.location}</h4>
            <a href={props.item.googleMapsUrl}>View on Google Maps</a>
          </div>

          <h1>{props.item.title}</h1>
          <h3>{props.item.startDate} - {props.item.endDate}</h3>
          <p>{props.item.description}</p>
          
        </main>
      </article>
      <div className='card--separator'></div>
    </>
    
  )
}

Card.propTypes = {
  item: PropTypes.shape({
    imageUrl: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    googleMapsUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired
}

export default Card