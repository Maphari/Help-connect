// REACT-ROUTER-DOM IMPORTS
import { Link } from "react-router-dom";

// ICONS IMPORTS
import { IoMail as Mail } from "react-icons/io5";
import { BiSolidLockAlt as LockIcon } from "react-icons/bi";
import { PiStudentFill as StudentIcon } from "react-icons/pi";
import {FaUser as Profile} from "react-icons/fa6"

// REDUX IMPORTS
import { SetEmail, SetUsername, SetStudentID } from "../../../redux/slice/student.slice";


export { SetEmail, SetUsername, SetStudentID };

export { Link };

export { Mail, LockIcon, StudentIcon , Profile};
