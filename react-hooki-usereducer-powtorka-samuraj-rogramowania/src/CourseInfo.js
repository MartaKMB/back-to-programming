const CourseInfo = ({ id, title, onClickHandler }) => {
    const handleOnClick = () => onClickHandler({
        id,
        type: 'REMOVE'
    });

    return (
        <div>
            <p>{title}</p>
            <button onClick={handleOnClick}>Usuń kurs</button>
        </div>
    )
};

export default CourseInfo;