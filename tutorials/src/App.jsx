import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import StateExample from "./components/StateExample";

import EventHandlingExample from "./components/EventHandlingExample";
import AppWithContext from "./components/ContextExample";
import LifecycleExample from "./components/LIfeCycleExample";

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/state">State</Link></li>
          <li><Link to="/lifecycle">Lifecycle</Link></li>
          <li><Link to="/events">Handling Events</Link></li>
          <li><Link to="/context">Context Hooks</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/state" element={<StateExample />} />
        <Route path="/lifecycle" element={<LifecycleExample />} />
        <Route path="/events" element={<EventHandlingExample />} />
        <Route path="/context" element={<AppWithContext />} />
      </Routes>
    </Router>
  );
}

export default App;
