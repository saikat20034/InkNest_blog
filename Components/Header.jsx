
const Header = () => {
  return (
    <div className="px-5 py-5 text-black md:px-12 lg:px-28">

      <div className="my-8 text-center">
        <h2 className="font-mono text-5xl md:text-3xl">Latest Blogs</h2>
        <p className="mt-10 max-w-[740px] m-auto text-base">Stay updated with the freshest insights, trending stories, and thought-provoking ideas. From the latest in technology and AI innovations to lifestyle tips and travel diaries — our newest blog posts bring you valuable content that informs, inspires, and empowers. Dive in and discover something new every week.</p>
        {/* <form className="flex justify-between text-black max-w-[500px] scale:100 mx-auto mt-10 border border-black" action="">
          <input type="email" placeholder="Enter Email Address" className="pl-4 outline-none" />
          <button type="submit" className="px-4 py-4 border-l border-black active:bg-gray-400 active:text-white">Subscribe</button>
        </form> */}
      </div>
    </div>
  );
};

export default Header;