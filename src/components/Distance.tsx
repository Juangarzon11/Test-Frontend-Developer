import location from '/svg/location.svg';

function Distance({ distance } : any) {
    return(
        <>
            <div className="w-16 h-8 bg-primary bg-opacity-10 rounded-xl text-primary flex justify-center items-center">
                <img className="w-2.5 mr-1" src={location} alt="send message" />
                <p className="text-xs font-semibold">{distance} km</p>
            </div>
        </>
    )
}

export default Distance