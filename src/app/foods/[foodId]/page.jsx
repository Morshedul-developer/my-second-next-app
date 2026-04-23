const page = async({params}) => {
    const {foodId} = await params;
    return (
        <div>
            <h2>The food is: {foodId}</h2>
        </div>
    );
};

export default page;