interface IProps {
  placeholder: string;
}

export default function TextInput({ placeholder }: IProps) {
  return (
    <div className="flex items-center border-2 py-2 px-3 rounded-md mb-4">
      <input
        className="pl-2 outline-none border-none text-white bg-black"
        type="text"
        name={placeholder.replace(" ", "_")}
        placeholder={`${placeholder[0].toUpperCase()}${placeholder.slice(1)}`}
      />
    </div>
  );
}
