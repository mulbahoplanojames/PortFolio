import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";

const PostOne = () => {
  return (
    <>
      <section className="md:pt-36 md:pb-20 pt-28 pb-16 lg:px-48 md:px-20 px-4 text-white">
        <p className="text-3xl bg-green-500">Post One</p>

        <Link
          to="/"
          className="fixed top-[10rem] right-10 w-10 h-10 bg-yellow-200 rounded-full flex justify-center items-center text-black"
        >
          <AiFillHome className="w-6 h-6" />
        </Link>
      </section>
    </>
  );
};

export default PostOne;
