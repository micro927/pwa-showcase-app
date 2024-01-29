import { useEffect } from "react";

function Dialog() {
  useEffect(() => {
    (document.getElementById("dialog") as HTMLDialogElement)?.showModal();
  }, []);
  return (
    <>
      <dialog
        id="dialog"
        className=" bg-white dark:bg-gray-950 text-gray-950 dark:text-white border rounded-xl -translate-y-52 backdrop:bg-gray-800 backdrop:bg-opacity-95 transition duration-700"
      >
        <p>Greetings, click OK to close me!</p>
        <form method="dialog">
          <button>OK</button>
        </form>
      </dialog>
    </>
  );
}

export default Dialog;
