import { motion as Motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MainLayout({ children }) {
    const location = useLocation();

    return (
        <div className="flex flex-col min-h-screen bg-[#eef0e6] text-neutral-900 selection:bg-emerald-500 selection:text-white overflow-x-hidden">
            <Navbar />

            <AnimatePresence mode="popLayout" initial={false}>
                <Motion.main
                    key={location.pathname}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="flex-grow relative pt-[72px] md:pt-[88px]"
                >
                    {children}
                </Motion.main>
            </AnimatePresence>

            <Footer />
        </div>
    );
}
