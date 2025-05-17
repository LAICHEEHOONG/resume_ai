import { getLockStatus } from "@/lib/action/lockAction";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLock } from "@/redux/features/lock/lockSlice";

export default function LockStatus() {
  const lock = useSelector((state) => state.lock?.lock);
  const dispatch = useDispatch();
  // const [lock, setLock] = useState(false);

  useEffect(() => {
    const fetchLockStatus = async () => {
      const status = await getLockStatus();
      dispatch(setLock(status))
    };
    fetchLockStatus();
  }, []);

  useEffect(() => {
    console.log(lock)
  }, [lock]);

  return (
    <div>
      {/* {lock ? "Locked" : "Unlocked"} */}
      {/* <p>Locked</p> */}
    </div>
  );
}