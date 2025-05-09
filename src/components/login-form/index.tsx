export default function LoginForm() {
  return (
    <form className="border h-[500px] w-[500px] flex flex-col items-center py-10 px-5">
      <fieldset className="border flex flex-col w-full">
        <legend className="text-2xl font-bold text-center">Login</legend>
        <p>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" id="name" />
        </p>
      </fieldset>
      <button
        className="hover:cursor-pointer px-2 py-3 bg-[#181818] text-white rounded"
        type="button"
      >
        Login
      </button>
    </form>
  );
}
