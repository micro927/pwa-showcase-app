import Clock from "../components/Clock";
import Dialog from "../components/Dialog";
import ThemeSwitcher from "../components/ThemeSwitcher";

function Home() {
  return (
    <>
      <div>
        <p className="text-3xl text-gray-950 dark:text-white">Hello</p>
        <Clock />
        <div className="mt-5">
          <ThemeSwitcher />
        </div>
      </div>
      <Dialog />
    </>
  );
}

export default Home;
