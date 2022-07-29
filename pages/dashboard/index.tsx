import type {NextPage} from 'next';
import HeaderComponent from '../../components/HeaderComponent';
import styled from 'styled-components';
import styles from '../../styles/module/Dashboard.module.scss';

const PageBody = styled.section`
  background: #FF9B85;
`;

const DashboardStyle = styled.main`
  min-height: 100vh;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const DashboardContainer = styled.div`
  //background: #FFD97D;
  height: 100vh;
  width: 80vw;
`;

const Dashboard: NextPage = () => {

    return (
        <div>
            <HeaderComponent title="Dashboard"/>
            <DashboardStyle>
                <DashboardContainer>
                    Test
                </DashboardContainer>
            </DashboardStyle>
        </div>
    );
};

export default Dashboard;
