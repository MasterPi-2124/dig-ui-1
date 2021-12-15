
const style = {
    button: {
        width: '30rem',
        height: '6rem',
        borderRadius: '50px',
    },
    buttonText: {
        fontSize: '2rem'
    }
}

const ConnectButton = ({ wrapSetShow }) => {

    const handleOver = (e) => {
        e.target.style.transform = 'scale(1.01)'
    }

    const handleLeave = (e) => {
        e.target.style.transform = 'scale(1)'
    }

    return (
        <div>
            <button onMouseEnter={handleOver}
                onMouseLeave={handleLeave}
                style={style.button}
                onClick={() => {
                    wrapSetShow(true)
                }}>
                <div style={style.buttonText}>
                    Connect
                </div>
            </button>
        </div>
    )
}

export default ConnectButton