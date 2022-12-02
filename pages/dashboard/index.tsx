type Props = {};

export default function index({}: Props) {
  return (
    <div className="container mx-auto flex flex-col gap-4 py-5">
      <h1 className="mx-5 text-2xl font-semibold">Welcome</h1>
      <div className="flex gap-4">
        <NoteCards />
      </div>
    </div>
  );
}

// internal components

function NoteCards() {
  return (
    <div className="flex flex-col gap-2 bg-lime-200 p-4">
      <input type="text" name="content" id="content" />
      <div className="flex justify-between">
        <p>date</p>
        <button>delete</button>
      </div>
    </div>
  );
}
