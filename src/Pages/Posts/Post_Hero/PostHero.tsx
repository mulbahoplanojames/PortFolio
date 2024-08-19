import postImage from "/src/assets/blog1.webp";

const PostHero = () => {
  return (
    <>
      <div className="w-full">
        <div className="w-full md:h-[450px] h-[300px] bg-neutral-950 mb-8">
          <img
            loading="lazy"
            src={postImage}
            alt="HTML TAGS IMAGE"
            className="w-full h-full"
          />
        </div>
        <h1 className="text-3xl pb-2">HTML TAGS</h1>
        <p className="text-md pb-6">Aug 21, 2022</p>
        <div className="flex items-center gap-3">
          <div className="w-14 h-14 bg-blue-500 rounded-full  overflow-hidden">
            <img src={postImage} alt="" className="w-full h-full" />
          </div>
          <p className="text-lg">By: Oplano James Mulbah</p>
        </div>
      </div>
    </>
  );
};

export default PostHero;
