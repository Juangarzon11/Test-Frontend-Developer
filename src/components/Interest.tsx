

function Interest({ interest } : any) {
    
    return(
        <>
            <div className="h-8 bg-white rounded-lg flex items-center justify-center outline outline-1 outline-red">
                <p className="text-sm text-black font-semibold">{interest}</p>
            </div>
        </>
    )
}

export default Interest