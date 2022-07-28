import type {NextPage} from 'next';
import HeaderComponent from '../../components/HeaderComponent';
import styled from 'styled-components';
import styles from '../../styles/module/Dashboard.module.scss';
import { Tabs } from '@mantine/core';
import { IconCalendar, IconBuildingBank, IconSettings, IconGraph} from '@tabler/icons';

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
  background: #FFD97D;
  height: 100vh;
  width: 80vw;
`;

const Dashboard: NextPage = () => {

    return (
        <PageBody>
            <HeaderComponent title="Dashboard"/>

            <DashboardStyle>
                <DashboardContainer>
                    <Tabs defaultValue="gallery">
                        <Tabs.List className={styles.tabList}>
                            <Tabs.Tab className={styles.tabLink} value="gallery" icon={<IconCalendar size={14} />}>Calendar</Tabs.Tab>
                            <Tabs.Tab className={styles.tabLink} value="messages" icon={<IconBuildingBank size={14} />}>Accounts</Tabs.Tab>
                            <Tabs.Tab className={styles.tabLink} value="settings" icon={<IconGraph size={14} />}>Reports</Tabs.Tab>
                            <Tabs.Tab className={styles.tabLink} value="settings" icon={<IconSettings size={14} />}>Settings</Tabs.Tab>
                        </Tabs.List>

                        <Tabs.Panel value="gallery" pt="xs">
                            Gallery tab content
                        </Tabs.Panel>

                        <Tabs.Panel value="messages" pt="xs">
                            Messages tab content
                        </Tabs.Panel>

                        <Tabs.Panel value="settings" pt="xs">
                            Settings tab content
                        </Tabs.Panel>
                    </Tabs>
                </DashboardContainer>
            </DashboardStyle>
        </PageBody>
    );
};

export default Dashboard;
