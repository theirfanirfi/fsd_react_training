const DailyStatus = (props) => {
    return (
        <>
            <h2>Daily Price: {props.totalDailyPrice}</h2>
            <h2>Daily Sold Products: {props.totalDailyProducts}</h2>
        </>
    )
}

export default DailyStatus;