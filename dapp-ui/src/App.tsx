import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import { Landing } from './pages/Landing';
import { Dashboard } from './pages/Dashboard';
import { Events } from './pages/Events';
import { Event } from './pages/Event';
import { CreateEvent } from './pages/CreateEvent';
import { Experiment } from "./pages/Experiment";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/create" element={<CreateEvent />} />
        <Route path="/events/*" element={<Event />} />
        <Route path="/home" element={<Home />} />
        <Route path="/experiment" element={<Experiment />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

function Home() {
  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
        <Link to="/about">About</Link>
      </nav>
    </>
  );
}

function About() {
  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>
          Nakama Studios a braddah
        </p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}

export default App;
