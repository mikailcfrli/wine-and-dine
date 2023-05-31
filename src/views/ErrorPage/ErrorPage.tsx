import './ErrorPage.scss';
import oops from '../ErrorPage/ops.png';
import error from '../ErrorPage/Error.png';
export const ErrorPage = () => {
    return (
        <div className="container">

            <div className="errorpage">
           
                <div className="number">
                <img className="oops" src={oops} alt="" />
                <p className='four' >404 </p></div>
                
                <p className='look' >LOOKS LIKE WE CAN'T FIND
                    <p>THE PAGE YOU WANT</p> </p> 

            </div>
        </div>
    );
};
