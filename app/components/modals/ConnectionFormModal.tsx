import TextInput from "@/app/utils/TextInput/TextInput";
import axios from "axios";
import { Dispatch, SetStateAction } from "react";
import { IoClose } from "react-icons/io5";
import { toast } from "react-toastify";

interface IProps {
  setLoading: Dispatch<SetStateAction<boolean>>;
  setSuccess: Dispatch<SetStateAction<boolean>>;
  setIsConnectionFormOpen: Dispatch<SetStateAction<boolean>>;
}

export default function ConnectionFormModal({
  setLoading,
  setSuccess,
  setIsConnectionFormOpen,
}: IProps) {
  const onSubmitHandler = async (formData: FormData) => {
    setLoading(true);
    const values = Object.fromEntries(formData);
    const { ip_address, username, password } = values;
    try {
      await axios.post("/api/connect-miniserver", {
        body: {
          ip_address,
          username,
          password,
        },
      });
      setSuccess(true);
      setLoading(false);
      toast.success(`Logged In Successfully!...`, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <div className="h-full w-full absolute top-0 flex justify-center bg-black overflow-hidden">
      <div className="flex absolute top-8 sm:top-14 right-8 sm:right-36">
        <IoClose
          className="text-3xl sm:text-4xl text-red-500 cursor-pointer"
          onClick={() => setIsConnectionFormOpen(false)}
        />
      </div>
      <div className="mt-36 sm:mt-44">
        <form className="" action={onSubmitHandler}>
          <p className="text-lg sm:text-xl font-normal text-gray-200 mb-7">
            Login to the Miniserver
          </p>
          <TextInput placeholder="ip address" />
          <TextInput placeholder="username" />
          <TextInput placeholder="password" />
          <button
            type="submit"
            className="block w-full bg-indigo-600 mt-4 py-2 rounded-md text-white font-semibold mb-2"
          >
            Connect
          </button>
        </form>
      </div>
    </div>
  );
}
