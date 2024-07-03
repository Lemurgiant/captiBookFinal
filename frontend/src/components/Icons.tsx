import { MdDeleteForever } from "react-icons/md";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";
import { FaBook } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";
import { MdEdit } from "react-icons/md";

export function DeleteIconUI(props: any) {
  return <MdDeleteForever {...props} />;
}

export function CheckMarkIconUI(props: any) {
  return <IoCheckmarkDoneSharp {...props} />;
}

export function CrossMarkIconUI(props: any) {
  return <IoCloseSharp {...props} />;
}

export function BookIconUI(props: any) {
  return <FaBook {...props} />;
}

export function PlusIconUI(props: any) {
  return <FaPlus {...props} />;
}

export function EditIconUI(props: any) {
  return <MdEdit {...props} />;
}
