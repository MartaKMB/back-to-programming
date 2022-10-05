import LiElement from "./LiElement";
// import { connect } from 'react-redux';
import { useSelector } from 'react-redux';

// const List = ({ ratesToProps }) => {
const List = () => {
    const ratesToProps = useSelector(store => store.rates);
    const ratesElements = ratesToProps && ratesToProps.map(singleRate =>
        <LiElement
            author={singleRate.author}
            comment={singleRate.comment}
            id={singleRate.id}
            rate={singleRate.rate}
            key={singleRate.id} />
    );
    return (
        <div>
            <h3>Wystawione oceny:</h3>
            <ul>
                {ratesElements}
            </ul>
        </div>
    );
};

// const connectReduxStateToProps = store => ({
//     ratesToProps: store.rates,
// })

// const ListConsumer = connect(connectReduxStateToProps, null)(List);

// export default ListConsumer;
export default List;