import './index.css';
import Add from './addition';
export default function Button(){
    return(
        <>
        <div>
            <a href="#" className='btn btn-blue'>
                <Add/>
                <span>Compose</span>
            </a>                       
        </div>
        </>
    )
}