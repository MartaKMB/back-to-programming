import { useState } from 'react';
// import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addRate, editRate } from './actions/appActions';

// const Form = ({ addRate, editRate, author = '', comment = '', callback, id, rate = 0 }) => {
const Form = ({ author = '', comment = '', callback, id, rate = 0 }) => {
    const [authorInput, setAuthorInput] = useState(author);
    const [rateInput, setRateInput] = useState(rate);
    const [commentInput, setCommentInput] = useState(comment);

    const dispatch = useDispatch();

    const handleChangeAuthor = e => setAuthorInput(e.target.value);
    const handleChangeRate = e => setRateInput(e.target.value);
    const handleChangeComment = e => setCommentInput(e.target.value);

    const handleFormSubmit = e => {
        e.preventDefault();
        // if (!authorInput.length) {
        //     return;
        // } --> middleware

        const rateObject = {
            author: authorInput,
            comment: commentInput,
            id,
            rate: Number(rateInput),
        };

        console.log('rate object: ', rateObject);

        // id
        //     ? editRate(rateObject)
        //     : addRate(rateObject);

        id
            ? dispatch(editRate(rateObject))
            : dispatch(addRate(rateObject));

        if (id) {
            callback();
        }
    };

    return (
        <form onSubmit={handleFormSubmit}>
            <div>
                <label>Autor:</label>
                <input type="text" onChange={handleChangeAuthor} value={authorInput} />
            </div>
            <div>
                <label>Ocena:</label>
                <input type="number" onChange={handleChangeRate} value={rateInput} />
            </div>
            <div>
                <label>Komentarz:</label>
                <input type="text" onChange={handleChangeComment} value={commentInput} />
            </div>
            <button type="submit">
                {id ? 'EDYCJA OCENY' : 'DODAJ OCENĘ'}
            </button>
        </form>
    );
};

// const connectActionsToProps = ({
//     addRate,
//     editRate,
// })

// const FormConsumer = connect(null, connectActionsToProps)(Form);

// export default FormConsumer;

export default Form;