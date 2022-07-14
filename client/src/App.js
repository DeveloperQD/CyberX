import React, { useState, useEffect, createContext } from 'react';
import './scss/index.scss';
import {
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import io from 'socket.io-client';

import Login from './pages/Login.js';
import Registration from './pages/Registration.js';
import Dashboard from './pages/Dashboard.js';
import UserList from './pages/UserList.js';
import StoryOverview from './pages/StoryOverview.js';
import StoryPage from './pages/StoryPage.js';
import StoryConfig from './pages/StoryConfig.js';
import ScenarioConfig from './pages/ScenarioConfig.js';
import InjectConfig from './pages/InjectConfig.js';
import ProtectedRoute from "./components/ProtectedRoute.js";
import useValueLogger from './hooks/useValueLogger.js';
import { UserContext } from './components/UserContext'
import { SocketContext } from './components/SocketContext'

const socket = io("http://localhost:" + (process.env.PORT || 3001));

function App() {
  var testData = [
    {
      id: 1,
      name: "Config",
      description: "Nice config description",
      createdOn: "2022-08-13T18:25:43.511Z",
      lastEditedOn: "2022-09-25T10:29:43.711Z",
      scenarios: [
        {
          id: 1,
          name: "Ransomware",
          description: "Nice Ransomware description",
          injects: [
            {
              id: 1,
              type: "email",
              description: "Email Spam 1",
              email: {
                to: "To Person",
                from: "From me",
                subject: "Subject",
                message: "Secret"
              },
              status: "completed",
              seconds: 90
            },
            {
              id: 2,
              type: "shell",
              description: "First shell inject!",
              status: "progress",
              seconds: 60
            }
          ]
        },
        {
          id: 2,
          name: "Email Spam",
          description: "Nice Email Spam description",
          injects: [
            {
              id: 1,
              type: "email",
              description: "DSGVO",
              status: "failed",
              seconds: 80
            },
            {
              id: 2,
              type: "phone",
              description: "Call boss!",
              status: "pending",
              seconds: 100
            }
          ]
        }
      ]
    }
  ]

  const [data, setData] = useState(testData);
  const [user, setUser] = useState({ username: "Testusername", password: "testpassword" });
  const [isStoryRunning, setIsStoryRunning] = useState(true);
  const [startTime, setStartTime] = useState(new Date());
  const [realTime, setRealTime] = useState(0);
  const [gameTime, setGameTime] = useState(0);

  useEffect(() => {
    socket.on('connect', () => {
      console.log("Connected with server")
    });
    return () => {
      socket.off('connect');
    };
  }, []);

  return (
    <SocketContext.Provider value={socket}>
      <UserContext.Provider value={user}>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login user={user} setUser={setUser} />} />
          <Route path="/registration" element={<Registration user={user} setUser={setUser} />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={
            <ProtectedRoute element={<UserList />} />
          } />
          <Route path="builder">
            <Route path="storyconfig" element={
              <ProtectedRoute element={<StoryConfig data={data} />} />
            } />
            <Route path="scenarioconfig" element={
              <ProtectedRoute element={<ScenarioConfig data={data} />} />
            } />
            <Route path="injectconfig" element={
              <ProtectedRoute element={<InjectConfig data={data} />} />
            } />
          </Route>
          <Route path="runner">
            <Route path="story/:storyid" element={
              <ProtectedRoute element={<StoryOverview data={data} isStoryRunning={isStoryRunning} setIsStoryRunning={setIsStoryRunning} />} />
            } />
            <Route path="story/:storyid/scenario/:scenarioid/inject/:injectid" element={
              <ProtectedRoute element={<StoryPage data={data} isStoryRunning={isStoryRunning} setIsStoryRunning={setIsStoryRunning} />} />
            } />
          </Route>

          <Route path="*" element={<p>Error404</p>} />
        </Routes>
      </UserContext.Provider>
    </SocketContext.Provider>
  );
}

export default App;
