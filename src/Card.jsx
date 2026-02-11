import './Card.css'
import catImg from './assets/image.png'

function Card(props){
    return(
        <>
            <div class="card">
                <img src={catImg} alt="Card Image" class="card-img"/>

                <div class="card-content"  style={{color:props.bColor}}>
                    <h3 class="card-title">{props.title}</h3>
                    <p class="card-text">
                       {props.text}
                    </p>
                    <button class="card-btn">Read More</button>
                </div>
            </div>

        </>
    )
}

export default Card