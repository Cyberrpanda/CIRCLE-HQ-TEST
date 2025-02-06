import './index.css';
import Add from './addition';
export default function Message(){
    return(
        <>
        <div className="message-hud">
            <a href="#" className='btn btn-blue'>
                <Add/>
                <span>Compose</span>
                </a>
             
             <div className="message-hud__1"></div>
        </div>
        </>
    )
}