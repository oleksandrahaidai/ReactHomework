import ResourcesComponent from "../components/ResourcesComponent/ResourcesComponent.tsx";

const ResourcesPage = () => {  //сторінка ресурсів підтягує ResourcesComponent, який містить виклик функції завантаження продуктів
    return (
        <div>
            Resources Page
            <ResourcesComponent/>
        </div>
    );
};
export default ResourcesPage;