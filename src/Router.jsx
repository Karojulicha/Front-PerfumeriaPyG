import { Route, Routes } from "react-router";
import { AppRoute } from "../Utils/AppRouter";
import { HomePage } from "./Pages/HomePage";
import { NotFoundCardPage } from "./Pages/NotFoundCardPage";
import { ManagePerfumePage } from "./Pages/Inventory/ManagePerfumePage";
import InventoryPage from "./Pages/Inventory/InventoryPage";

export const Router = () => {
  return (
    <>
      <Routes>
        <Route path={AppRoute.Base} element={<HomePage />} />
        <Route path={AppRoute.Inventory} element={<InventoryPage />} />
        <Route path={AppRoute.managePerfume} element={<ManagePerfumePage />} />
        <Route path="*" element={<NotFoundCardPage />} />
      </Routes>
    </>
  );
};
