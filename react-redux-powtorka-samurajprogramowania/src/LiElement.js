import { useState } from "react";
import Form from "./Form";
// import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteRate } from './actions/appActions';

// const LiElement = ({ deleteRate, author, comment, id, rate }) => {
const LiElement = ({ author, comment, id, rate }) => {
    const [isvisibleForm, setIsVisibleForm] = useState(false);

    const dispatch = useDispatch();

    const handleToggleElemnts = () => setIsVisibleForm(prev => !prev);
    const handleDeleteRate = () => dispatch(deleteRate(id));

    const formOrButtonElement = isvisibleForm
        ? (
            <Form
                author={author}
                comment={comment}
                callback={handleToggleElemnts}
                id={id}
                rate={rate}
            />
        ) : (<div>
            <button onClick={handleToggleElemnts}>EDYTUJ OCENĘ</button>
            <button onClick={handleDeleteRate}>USUŃ OCENĘ</button>
        </div>

        )


    return (
        <li>
            <p>Autor oceny: {author}</p>
            <p>Ocena: {rate}</p>
            <p>komentarz: {comment}</p>
            {formOrButtonElement}
        </li>
    )
}

// const connectActionsToProps = ({
//     deleteRate,
// })

// const LiElementConsumer = connect(null, connectActionsToProps)(LiElement);

// export default LiElementConsumer;

export default LiElement;