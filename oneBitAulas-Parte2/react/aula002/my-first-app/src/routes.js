import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PlanetsScreen from './screen/planets';

const toRoutes = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<PlanetsScreen />} />
        </Routes>
    </BrowserRouter>
);

export default toRoutes;