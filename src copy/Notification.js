const Notification = ({message}) => {
    if(message === null){
        return null
    }
    else
    return (
        <div className = 'error'>
            {
                message
            }
        </div>
    )

}
export default Notification