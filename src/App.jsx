import Title from "./components/Title.jsx";
import SearchBar from "./components/SearchBar.jsx";

export default function App() {
  return (
    <div className="flex flex-col justify-start items-center h-screen w-full bg-stone-200 gap-5">
      <Title />
      <SearchBar />
    </div>
  );
}
