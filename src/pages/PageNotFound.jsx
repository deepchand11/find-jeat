import { Link } from "react-router-dom";
export default function PageNotFound() {
  return (
    <div className="bg-stone-50 h-screen w-[75%] flex flex-col items-center">
      <h1 className="text-3xl m-5">Page Not Found!</h1>
      <h2 className="text-xl p-5 m-2 w-full">
        Uh-oh! This page took a vacation.But don't worry, you can always go back
        home!
      </h2>
      <Link
        to="/"
        className="bg-orange-600 shadow-lg rounded-lg px-5 py-2 !text-white">
        Take me home!
      </Link>
    </div>
  );
}
