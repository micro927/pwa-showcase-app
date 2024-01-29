import { useEffect } from 'react';

function Dialog() {
  useEffect(() => {
    (document.getElementById('dialog') as HTMLDialogElement)?.showModal();
  }, []);
  return (
    <>
      <dialog
        id="dialog"
        className=" -translate-y-52 rounded-xl border bg-white text-gray-950 transition duration-700 backdrop:bg-gray-800 backdrop:bg-opacity-95 dark:bg-gray-950 dark:text-white"
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
