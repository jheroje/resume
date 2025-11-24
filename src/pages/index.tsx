import Layout from '../components/Layout';
import Main from '../components/Main';
import Sidebar from '../components/Sidebar';
import ThemeButton from '../components/theme/ThemeButton';

const IndexPage = () => {
  return (
    <Layout>
      <ThemeButton />
      <Sidebar />
      <Main />
    </Layout>
  );
};

export default IndexPage;
