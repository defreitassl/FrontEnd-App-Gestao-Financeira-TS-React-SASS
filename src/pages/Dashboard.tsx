import { Container, MainText, DashboardStats, LargeButton, SubText, RecentTransactions } from "../components"


const DashboardPage = () => {

    return (
        <Container>
            <MainText text="Dashboard" alignLeft={true}/>
            <DashboardStats/>
            <LargeButton innerText="New Transaction" event={()=>{}}/>
            <div className="recent-transactions-area">
                <SubText text="Recent Transactions"/>
                <RecentTransactions/>
            </div>
        </Container>
    )
}

export default DashboardPage