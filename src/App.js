import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import OtpComp from './components/OtpComp';
import QuickChips from './components/QuickChips';
import TodoList from './components/TodoList';
import ParallelTimers from './components/ParallelTimers';
import PaginationTable from './components/PaginationTable';
import CustomInputField from './components/CustomInputField';
import FetchUsers from './components/FetchUsers';
import CusDropdown from './components/CusDropdown';
import NewsFeed from './components/NewsFeed';
import PaginationUsers from './components/PaginationUsers';
import FolderStructure from './components/FolderStructure';
import { folderStructure } from './constants';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/otp" exact element={<OtpComp length={5} />} />
      <Route path="/chips" exact element={<QuickChips />} />
      <Route path="/todo" exact element={<TodoList />} />
      <Route path="/ptimers" exact element={<ParallelTimers />} />
      <Route path="/pagination" exact element={<PaginationTable />} />
      <Route path="/cinput" exact element={<CustomInputField />} />
      <Route path="/fetchUsers" exact element={<FetchUsers />} />
      <Route path="/select" exact element={<CusDropdown />} />
      <Route path="/fnews" exact element={<NewsFeed />} />
      <Route path="/fphotos" exact element={<PaginationUsers />} />
      <Route path="/fstructure" exact element={<FolderStructure data={folderStructure} />} />
    </Routes>
  );
}

export default App;
