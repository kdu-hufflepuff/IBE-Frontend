import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import * as Sentry from '@sentry/react';
import { HomePage, LoginPage, RoomsPage } from './pages';

Sentry.init({
    dsn: import.meta.env.VITE_SENTRY_DSN,
    integrations: [Sentry.browserTracingIntegration()],
    tracesSampleRate: 1.0,
});

const App: React.FC = () => {
    return (
        <Sentry.ErrorBoundary fallback={<p>An error has occurred</p>}>
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/login" element={<LoginPage/>}/>
                    <Route path="/property/:propertyId/rooms" element={<RoomsPage/>}/>
                </Routes>
            </Router>
            
        </Sentry.ErrorBoundary>
    );
};

export default App;
