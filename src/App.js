import { Routes, Route } from 'react-router-dom';
import Employees from './components/Employee/Employees.js'
import Header from './components/Header/Header';
import MainPage from './components/MainPage/MainPage.js';
import SearchEmployee from './components/Employee/SearchEmployee/SearchEmployee.js';
import CreateEmployee from './components/Employee/CreateEmployee/CreateEmployee.js';
import DeleteEmployee from './components/Employee/DeleteEmployee/DeleteEmployee.js';
import UpdateEmployee from './components/Employee/UpdateEmployee/UpdateEmployee.js';

import Task from './components/Tasks/Task.js';
import CreateTask from './components/Tasks/CreateTask/CreateTask.js';
import UpdateTask from './components/Tasks/UpdateTask/UpdateTask.js';
import DeleteTask from './components/Tasks/DeleteTask/DeleteTask.js';
import SearchTask from './components/Tasks/SearchTask/SearchTask.js';

import TopFiveEmployees from './components/Employee/TopFiveEmployees/TopFiveEmployees.js';

import SignIn from './components/Auth/SignIn.js';
import SignUp from './components/Auth/SignUp.js';
import { AuthContextProvider } from './context/AuthContext.js';
import ProtectedRoute from './components/ProtectedRoute.js';

import UserAccount from './components/UserAccount/UserAccount.js';

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Header />

        <Routes>

          <Route path='/' element={<MainPage />} />
          <Route path='/employees' element={<ProtectedRoute>
            <Employees />
          </ProtectedRoute>} />
          <Route path='/employees/find/employee' element={<ProtectedRoute>
            < SearchEmployee />
          </ProtectedRoute>} />
          <Route path='/employees/create/employee' element={<ProtectedRoute>
              < CreateEmployee />
            </ProtectedRoute>} />
          <Route path='/employees/remove/employee' element={<ProtectedRoute>
            < DeleteEmployee />
          </ProtectedRoute>} />
          <Route path='/employees/update/employee' element={<ProtectedRoute>
            < UpdateEmployee />
          </ProtectedRoute>} />

          <Route path='/tasks' element={<ProtectedRoute>
            < Task />
          </ProtectedRoute>} />
          <Route path='/tasks/create/task' element={<ProtectedRoute>
            < CreateTask />
          </ProtectedRoute>} />
          <Route path='/tasks/search/task' element={<ProtectedRoute>
            < SearchTask />
          </ProtectedRoute>} />
          <Route path='/tasks/update/task' element={<ProtectedRoute>
            < UpdateTask />
          </ProtectedRoute>} />
          <Route path='/tasks/remove/task' element={<ProtectedRoute>
            < DeleteTask />
          </ProtectedRoute>} />

          <Route path='/mostcompletedtasks' element={<ProtectedRoute>
            < TopFiveEmployees />
          </ProtectedRoute>} />

          <Route path='/useraccount' element={<ProtectedRoute>
            <UserAccount />
          </ProtectedRoute>} />

          <Route path='/signup' element={< SignUp />} />
          <Route path='/signin' element={< SignIn />} />

        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
