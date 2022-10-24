import { useDispatch } from "react-redux";
import type { AppDispatch } from "../redux/store";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
// it's better to create typed versions of the useDispatch and useSelector hooks for usage in your application
// here I just used useDispatch
export const useAppDispatch: () => AppDispatch = useDispatch;
