// import React, { useState, useEffect } from "react";
// import { Link, NavLink } from "react-router-dom";
// import { HiMenuAlt4, HiX } from "react-icons/hi";
// import { RiUser3Line, RiLogoutBoxLine, RiFileListLine } from "react-icons/ri";
// import { useAuth } from "../../contexts/AuthContext";
// import { toast } from "react-hot-toast";
// import { motion, AnimatePresence } from "framer-motion";

// const Navbar = () => {
//     const [isOpen, setIsOpen] = useState(false);
//     const [isScrolled, setIsScrolled] = useState(false);
//     const { user, logOut } = useAuth();

//     // Handle scroll effect
//     useEffect(() => {
//         const handleScroll = () => {
//             setIsScrolled(window.scrollY > 20);
//         };
//         window.addEventListener("scroll", handleScroll);
//         return () => window.removeEventListener("scroll", handleScroll);
//     }, []);

//     const handleLogOut = () => {
//         logOut()
//             .then(() => {
//                 toast.success("Logged out successfully!");
//             })
//             .catch((error) => {
//                 toast.error(error.message);
//             });
//     };

//     const navLinks = [
//         { path: "/", label: "Home" },
//         { path: "/services", label: "Services" },
//         { path: "/blog", label: "Blog" },
//         { path: "/contact", label: "Contact" },
//     ];

//     const buttonHoverVariants = {
//         hover: {
//             scale: 1.05,
//             boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
//             transition: {
//                 duration: 0.2,
//                 ease: "easeInOut"
//             }
//         },
//         tap: {
//             scale: 0.95,
//             transition: {
//                 duration: 0.1
//             }
//         }
//     };

//     const navLinkVariants = {
//         initial: { opacity: 0, y: -20 },
//         animate: { opacity: 1, y: 0 },
//         hover: {
//             scale: 1.05,
//             color: "#4F46E5",
//             transition: {
//                 duration: 0.2,
//                 ease: "easeInOut"
//             }
//         },
//         tap: {
//             scale: 0.95,
//             transition: {
//                 duration: 0.1
//             }
//         }
//     };

//     const linkHoverVariants = {
//         hover: {
//             scale: 1.05,
//             color: "#4F46E5", // indigo-600
//             transition: {
//                 duration: 0.2
//             }
//         }
//     };

//     return (
//         <motion.nav
//             initial={{ y: -100 }}
//             animate={{ y: 0 }}
//             transition={{ duration: 0.5, ease: "easeOut" }}
//             className={`fixed w-full z-50 transition-all duration-300 ${
//                 isScrolled
//                     ? "bg-white/95 backdrop-blur-sm shadow-lg py-3"
//                     : "bg-transparent py-5"
//             }`}
//         >
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                 <div className="flex items-center justify-between h-20">
//                     {/* Logo */}
//                     <motion.div
//                         whileHover={{ scale: 1.05 }}
//                         whileTap={{ scale: 0.95 }}
//                     >
//                         <Link
//                             to="/"
//                             className="flex items-center space-x-2 group"
//                         >
//                             <span className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent group-hover:from-pink-600 group-hover:via-purple-600 group-hover:to-indigo-600 transition-all duration-500">
//                                 TechRepair
//                             </span>
//                         </Link>
//                     </motion.div>

//                     {/* Desktop Navigation */}
//                     <div className="hidden md:flex items-center space-x-10">
//                         {navLinks.map((link, index) => (
//                             <motion.div
//                                 key={link.path}
//                                 initial="initial"
//                                 animate="animate"
//                                 whileHover="hover"
//                                 whileTap="tap"
//                                 variants={navLinkVariants}
//                                 transition={{ duration: 0.3, delay: index * 0.1 }}
//                             >
//                                 <NavLink
//                                     to={link.path}
//                                     className={({ isActive }) =>
//                                         `text-base font-semibold tracking-wide transition-all duration-200 ${
//                                             isActive
//                                                 ? "text-indigo-600 relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-indigo-600 after:scale-x-100"
//                                                 : "text-gray-700 hover:text-indigo-600 relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-indigo-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
//                                         }`
//                                     }
//                                 >
//                                     {link.label}
//                                 </NavLink>
//                             </motion.div>
//                         ))}
//                     </div>

//                     {/* User Menu */}
//                     <div className="hidden md:flex items-center space-x-6">
//                         {user ? (
//                             <motion.div
//                                 initial={{ opacity: 0, x: 20 }}
//                                 animate={{ opacity: 1, x: 0 }}
//                                 transition={{ duration: 0.3 }}
//                                 className="flex items-center space-x-4"
//                             >
//                                 <div className="relative group">
//                                     <motion.button
//                                         whileHover="hover"
//                                         whileTap="tap"
//                                         variants={buttonHoverVariants}
//                                         className="flex items-center space-x-2 text-gray-700 hover:text-indigo-600 transition-all duration-200"
//                                     >
//                                         <RiUser3Line className="w-6 h-6" />
//                                         <span className="text-base font-medium">{user.displayName || "User"}</span>
//                                     </motion.button>
//                                     <motion.div
//                                         initial={{ opacity: 0, y: 10 }}
//                                         whileHover={{ opacity: 1, y: 0 }}
//                                         className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-xl py-2 hidden group-hover:block"
//                                     >
//                                         <motion.div
//                                             whileHover="hover"
//                                             variants={linkHoverVariants}
//                                         >
//                                             <Link
//                                                 to="/myreview"
//                                                 className="flex items-center space-x-2 px-4 py-3 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors duration-200"
//                                             >
//                                                 <RiFileListLine className="w-5 h-5" />
//                                                 <span>My Reviews</span>
//                                             </Link>
//                                         </motion.div>
//                                         <motion.button
//                                             whileHover="hover"
//                                             whileTap="tap"
//                                             variants={buttonHoverVariants}
//                                             onClick={handleLogOut}
//                                             className="flex items-center space-x-2 w-full px-4 py-3 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors duration-200"
//                                         >
//                                             <RiLogoutBoxLine className="w-5 h-5" />
//                                             <span>Sign Out</span>
//                                         </motion.button>
//                                     </motion.div>
//                                 </div>
//                             </motion.div>
//                         ) : (
//                             <motion.div
//                                 initial={{ opacity: 0, x: 20 }}
//                                 animate={{ opacity: 1, x: 0 }}
//                                 transition={{ duration: 0.3 }}
//                                 className="flex items-center space-x-6"
//                             >
//                                 <motion.div
//                                     whileHover="hover"
//                                     variants={linkHoverVariants}
//                                 >
//                                     <Link
//                                         to="/login"
//                                         className="text-base font-semibold text-gray-700 hover:text-indigo-600 transition-colors duration-200"
//                                     >
//                                         Sign In
//                                     </Link>
//                                 </motion.div>
//                                 <motion.div
//                                     whileHover="hover"
//                                     whileTap="tap"
//                                     variants={buttonHoverVariants}
//                                 >
//                                     <Link
//                                         to="/register"
//                                         className="inline-flex items-center px-6 py-3 border border-transparent text-base font-semibold rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 transition-all duration-200 shadow-sm hover:shadow-md"
//                                     >
//                                         Get Started
//                                     </Link>
//                                 </motion.div>
//                             </motion.div>
//                         )}
//                     </div>

//                     {/* Mobile menu button */}
//                     <motion.div
//                         whileHover="hover"
//                         whileTap="tap"
//                         variants={buttonHoverVariants}
//                         className="md:hidden"
//                     >
//                         <button
//                             onClick={() => setIsOpen(!isOpen)}
//                             className="inline-flex items-center justify-center p-2 rounded-lg text-gray-700 hover:text-indigo-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
//                         >
//                             {isOpen ? (
//                                 <HiX className="h-7 w-7" />
//                             ) : (
//                                 <HiMenuAlt4 className="h-7 w-7" />
//                             )}
//                         </button>
//                     </motion.div>
//                 </div>
//             </div>

//             {/* Mobile menu */}
//             <AnimatePresence>
//                 {isOpen && (
//                     <motion.div
//                         initial={{ opacity: 0, height: 0 }}
//                         animate={{ opacity: 1, height: "auto" }}
//                         exit={{ opacity: 0, height: 0 }}
//                         transition={{ duration: 0.3 }}
//                         className="md:hidden"
//                     >
//                         <motion.div
//                             initial={{ y: -20 }}
//                             animate={{ y: 0 }}
//                             transition={{ duration: 0.3 }}
//                             className="px-4 pt-4 pb-6 space-y-2 bg-white shadow-xl rounded-b-2xl"
//                         >
//                             {navLinks.map((link, index) => (
//                                 <motion.div
//                                     key={link.path}
//                                     initial="initial"
//                                     animate="animate"
//                                     whileHover="hover"
//                                     whileTap="tap"
//                                     variants={navLinkVariants}
//                                     transition={{ duration: 0.3, delay: index * 0.1 }}
//                                 >
//                                     <NavLink
//                                         to={link.path}
//                                         className={({ isActive }) =>
//                                             `block px-4 py-3 rounded-lg text-base font-semibold ${
//                                                 isActive
//                                                     ? "text-indigo-600 bg-indigo-50"
//                                                     : "text-gray-700 hover:text-indigo-600 hover:bg-indigo-50"
//                                             }`
//                                         }
//                                         onClick={() => setIsOpen(false)}
//                                     >
//                                         {link.label}
//                                     </NavLink>
//                                 </motion.div>
//                             ))}
//                             {user ? (
//                                 <>
//                                     <motion.div
//                                         initial={{ opacity: 0, x: -20 }}
//                                         animate={{ opacity: 1, x: 0 }}
//                                         transition={{ duration: 0.3, delay: 0.4 }}
//                                         whileHover="hover"
//                                         variants={linkHoverVariants}
//                                     >
//                                         <Link
//                                             to="/myreview"
//                                             className="flex items-center space-x-2 px-4 py-3 rounded-lg text-base font-semibold text-gray-700 hover:text-indigo-600 hover:bg-indigo-50"
//                                             onClick={() => setIsOpen(false)}
//                                         >
//                                             <RiFileListLine className="w-5 h-5" />
//                                             <span>My Reviews</span>
//                                         </Link>
//                                     </motion.div>
//                                     <motion.div
//                                         initial={{ opacity: 0, x: -20 }}
//                                         animate={{ opacity: 1, x: 0 }}
//                                         transition={{ duration: 0.3, delay: 0.5 }}
//                                         whileHover="hover"
//                                         whileTap="tap"
//                                         variants={buttonHoverVariants}
//                                     >
//                                         <button
//                                             onClick={() => {
//                                                 handleLogOut();
//                                                 setIsOpen(false);
//                                             }}
//                                             className="flex items-center space-x-2 w-full px-4 py-3 rounded-lg text-base font-semibold text-gray-700 hover:text-indigo-600 hover:bg-indigo-50"
//                                         >
//                                             <RiLogoutBoxLine className="w-5 h-5" />
//                                             <span>Sign Out</span>
//                                         </button>
//                                     </motion.div>
//                                 </>
//                             ) : (
//                                 <>
//                                     <motion.div
//                                         initial={{ opacity: 0, x: -20 }}
//                                         animate={{ opacity: 1, x: 0 }}
//                                         transition={{ duration: 0.3, delay: 0.4 }}
//                                         whileHover="hover"
//                                         variants={linkHoverVariants}
//                                     >
//                                         <Link
//                                             to="/login"
//                                             className="block px-4 py-3 rounded-lg text-base font-semibold text-gray-700 hover:text-indigo-600 hover:bg-indigo-50"
//                                             onClick={() => setIsOpen(false)}
//                                         >
//                                             Sign In
//                                         </Link>
//                                     </motion.div>
//                                     <motion.div
//                                         initial={{ opacity: 0, x: -20 }}
//                                         animate={{ opacity: 1, x: 0 }}
//                                         transition={{ duration: 0.3, delay: 0.5 }}
//                                         whileHover="hover"
//                                         whileTap="tap"
//                                         variants={buttonHoverVariants}
//                                     >
//                                         <Link
//                                             to="/register"
//                                             className="block px-4 py-3 rounded-lg text-base font-semibold text-gray-700 hover:text-indigo-600 hover:bg-indigo-50"
//                                             onClick={() => setIsOpen(false)}
//                                         >
//                                             Get Started
//                                         </Link>
//                                     </motion.div>
//                                 </>
//                             )}
//                         </motion.div>
//                     </motion.div>
//                 )}
//             </AnimatePresence>
//         </motion.nav>
//     );
// };

// export default Navbar; 



