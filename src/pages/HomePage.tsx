const HomePage = () => {  // домашня сторінка, підтягується в Outlet мейн лейауту у випадку, якщо шлях визначений як '/'(index:true) у файлі routes.tsx;
    // на Home Page можна перейти використовуючи Меню, що також виводиться у мейн лейаут
    return (
        <div>
            Home Page
        </div>
    );
};

export default HomePage;