import './MainTitle.scss';

interface MainTitleEssence {
    title: String;
    message: String;
}

const MainTitle = ({ title, message }: MainTitleEssence) => {
    return (
        <h2> { title } 
            <h1>{ message }</h1>
        </h2>
    )
}

export default MainTitle;
