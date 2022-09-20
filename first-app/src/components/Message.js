import './Message.css';

function Message(props) {
    return (
        <div>
            <h4>{props.displayedComment.title}</h4>
            <div>{props.displayedComment.body}</div>
        </div>
    );
}

export default Message;
