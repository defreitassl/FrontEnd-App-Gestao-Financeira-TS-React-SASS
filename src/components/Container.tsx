interface IContainer {
    children: React.ReactNode;
}

const Container = ({ children }: IContainer) => {
    return (
        <div className="container-card">
            {children}
        </div>
    )
}

export default Container