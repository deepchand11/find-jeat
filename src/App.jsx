import Title from "./components/Title.jsx";
import SearchBar from "./components/SearchBar.jsx";

export default function App() {
  return (
    <div className="flex flex-col justify-start items-center min-h-screen w-full bg-stone-200 gap-5">
      <Title />
      <div className="bg-stone-50 min-h-screen mb-5 w-[75%] flex flex-col items-center">
        <SearchBar />
      </div>
    </div>
  );
}
