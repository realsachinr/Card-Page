import React from "react";
import { useState, useEffect } from "react";
function Cards() {
  const [post, setPost] = useState();
  const [currentpage, setCurrentpage] = useState(0);
  const itemPerPage = 6;

  async function fetchData() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      setPost(data);
    } catch (err) {
      console.log(err);
    }
  }
  //   console.log(post);
  useEffect(() => {
    fetchData();
  }, []);

  const handleNext = () => {
    setCurrentpage(currentpage + 1);
  };

  const handlePrevious = () => {
    if (currentpage > 0) {
      setCurrentpage(currentpage - 1);
    }
  };

  const handleRemovepost = (id) => {
    setPost(post.filter((item) => item.id !== id));
  };

  return (
    <div>
      <div className="container ">
        <div className="grid max-w-[50rem] drop-shadow-2xl  rounded-xl bg-[#E7EEF4] py-4 px-4 gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
          {post &&
            post
              .slice(currentpage * itemPerPage, (currentpage + 1) * itemPerPage)
              .map((item) => (
                <div key={item.id} className="bg-white rounded-xl py-1 px-3">
                  <div className="flex gap-2">
                    <span className="font-bold ">{item.id}) </span>
                    <span className=" font-bold ">{item.title}</span>
                  </div>
                  <p className="text-justify">{item.body}</p>

                  <button
                    className=" rounded-md py-1 px-1"
                    onClick={() => handleRemovepost(item.id)}
                  >
                    <img className="w-8" src="./remove.png" alt="" />
                  </button>
                  <br />
                </div>
              ))}
        </div>
      </div>
      <div className="  bottom-0 py-4 flex justify-between items-center ">
        <div className="bg-slate-900 py-1 rounded-lg text-white px-4 flex justify-center items-center">
          <button onClick={handlePrevious}>Previous</button>
        </div>
        <div className="bg-slate-900 py-1 rounded-lg text-white px-4 flex justify-center items-center">
          <button onClick={handleNext}>Next</button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
