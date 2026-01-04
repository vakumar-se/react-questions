import React, { useContext } from 'react';
import { styles } from './styles';
import SeatLayout from '../../components/SeatLayout';
import Menu from '../../components/SeatLayout/Menu';
import InputForm from '../../components/InputForm';
import CustomInputField from '../../components/CustomInputField';
import FetchUsers from '../../components/FetchUsers';
import FolderStructure from '../../components/FolderStructure';
import { folderStructure } from '../../constants';
import CusDropdown from '../../components/CusDropdown';
import Snackbar from '../../components/Snackbar';
import { useSnackbar } from '../../components/useSnackBar';
import { SnackContext } from '../../components/SnackContext';
import PaginationTable from '../../components/PaginationTable';
import NewsFeed from '../../components/NewsFeed';
import PaginationUsers from '../../components/PaginationUsers';
import CustomAccordion from '../../components/CustomAccordion';
import QuickChips from '../../components/QuickChips';
import TodoList from '../../components/TodoList';
import OtpComp from '../../components/OtpComp';
import ParallelTimers from '../../components/ParallelTimers';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <div>
        <button style={styles.homeBtn} onClick={() => navigate('/otp')}>
          Otp comp
        </button>
        <button style={styles.homeBtn} onClick={() => navigate('/chips')}>
          Quick Chips
        </button>
        <button style={styles.homeBtn} onClick={() => navigate('/todo')}>
          Todo List
        </button>
        <button style={styles.homeBtn} onClick={() => navigate('/ptimers')}>
          Parallel Timers
        </button>
        <button style={styles.homeBtn} onClick={() => navigate('/pagination')}>
          Table Pagination
        </button>
        <button style={styles.homeBtn} onClick={() => navigate('/cinput')}>
          Custom Input
        </button>
        <button style={styles.homeBtn} onClick={() => navigate('/fetchUsers')}>
          Fetch users & Filter
        </button>
        <button style={styles.homeBtn} onClick={() => navigate('/select')}>
          Select Box
        </button>
        <button style={styles.homeBtn} onClick={() => navigate('/fnews')}>
          Fetch News Feed
        </button>
        <button style={styles.homeBtn} onClick={() => navigate('/fphotos')}>
          Pagination with 5000 records
        </button>
        <button style={styles.homeBtn} onClick={() => navigate('/fstructure')}>
          Folder structure
        </button>
      </div>
      <div>
        {/* <div style={styles.cover}>
                <h1 style={styles.mainHead}>Cinema Hall Booking </h1>
                <div style={styles.subHead}>Select your preffered seats </div>
                <div style={styles.divider} />
                <div style={styles.subHead}> SCREEN </div>
                <SeatLayout />
            </div> */}
        {/* <Menu title="Books" menuList={['Book1', 'Book2']} /> */}

        {/* <SnackContext.Provider value={}>
        <InputForm />
      </SnackContext.Provider> */}
        {/* <CustomAccordion /> */}
        {/* <FolderStructure data={folderStructure} /> */}
        {/* <Snackbar message="Api Call is Success" type="success" /> */}
      </div>
    </div>
  );
};

export default Home;
