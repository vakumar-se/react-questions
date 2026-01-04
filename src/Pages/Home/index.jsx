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

const Home = () => {
  return (
    <div style={styles.container}>
      {/* <button className="route-btn">OTP</button> */}

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
      {/* <PaginationTable /> */}
      {/* <CustomInputField /> */}
      {/* <NewsFeed /> */}
      {/* <PaginationUsers /> */}
      {/* <CustomAccordion /> */}
      {/* <QuickChips /> */}
      {/* <TodoList /> */}
      {/* <OtpComp length={5} /> */}
      {/* <FetchUsers /> */}
      {/* <FolderStructure data={folderStructure} /> */}
      <ParallelTimers />
      {/* <CusDropdown /> */}
      {/* <Snackbar message="Api Call is Success" type="success" /> */}
    </div>
  );
};

export default Home;
