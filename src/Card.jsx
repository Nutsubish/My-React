import Mypicture from './assets/me.jpg'

const Card = () =>{

    return(
            <>
            <div className='flex-div'>
                <div className="Main-Card">
                    <img src={Mypicture} alt="My Photo" width={200}/>
                    <h2>Nick Nutsubidze</h2>
                    <p>I Study At Goa</p>
                    <p>And I Really Like it</p>
                </div>
            </div>
            </>
    )
};

export default Card