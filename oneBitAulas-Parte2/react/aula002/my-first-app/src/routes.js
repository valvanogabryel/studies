import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PlanetsScreen from './screen/planets';
import PlanetScreen from "./screen/planet";
import NotFoundScreen from "./screen/notFound";

const toRoutes = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<PlanetsScreen />} />
            <Route exact path="/planet/:id" element={<PlanetScreen />} />
            <Route exact path="*" element={<NotFoundScreen />} /> // Sempre deve ir em último
        </Routes>
    </BrowserRouter >
);

export default toRoutes;