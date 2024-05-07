import { Routes, Route, Navigate } from "react-router-dom";
import Translate from "./Components/Translate.js";
import Dictionary from "./Components/Dictionary.js"
import Main from './Pages/Main';
  
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route index element={<Translate />} />
        <Route path="translate" element={<Translate />} />
        <Route path="dictionary" element={<Dictionary />  } />
        <Route path="*" element={<Navigate to="translate" replace />} />
      </Route>
    </Routes>
  );
};

export default App;

