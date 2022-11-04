import Reject from '/svg/reject.svg';
import Heart from '/svg/heart.svg';
import Star from '/svg/star.svg';

function InteractionButtons() {
    return(
        <div className="-mt-12 w-full flex justify-evenly items-center absolute">
            <div>
                <button className="w-20 h-20 text-3xl bg-white rounded-full shadow-xl flex justify-center items-center">
                    <img src={Reject} alt="Reject" />
                </button>
            </div>
            <div>
                <button className="w-28 h-28 text-3xl bg-primary rounded-full shadow-2xl flex justify-center items-center">
                    <img src={Heart} alt="Reject" />
                </button>
            </div>
            <div>
                <button className="w-20 h-20 text-3xl bg-white rounded-full shadow-xl flex justify-center items-center">
                    <img src={Star} alt="Reject" />
                </button>
            </div>
        </div>
    )
}

export default InteractionButtons