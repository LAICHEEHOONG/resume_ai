import { ImBlocked } from "react-icons/im";

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
      </div>
    </div>
  );
}
