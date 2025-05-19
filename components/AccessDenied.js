// pages/access-denied.tsx
import BlockIcon from '@mui/icons-material/Block';
import { ImBlocked } from "react-icons/im";
// import Link from 'next/link'
import Link from 'next/link';

export default function AccessDenied() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg text-center max-w-md">
        <div className="flex justify-center mb-4">
          <ImBlocked className=" text-red-500" size={100} />
        </div>
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Access Denied</h1>
        <p className="text-gray-600 mb-6">
          {`You don't have permission to view this page.`}
        </p>
        {/* <Link href="/">
          <div className="inline-block bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-xl transition">
            Go Back Home
          </div>
        </Link> */}
      </div>
    </div>
  )
}