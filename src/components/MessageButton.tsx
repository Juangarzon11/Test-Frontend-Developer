import sendMessage from '/svg/send-message.svg';

function MessageButton() {
    return(
        <>
            <button className="w-12 h-12 text-3xl bg-white rounded-xl outline outline-1 outline-gray-200 px-3">
                <img className="w-5" src={sendMessage} alt="send message" />
            </button>
        </>
    )
}

export default MessageButton