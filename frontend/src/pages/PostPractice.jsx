import React from 'react'

const CompletePage = () => {
  const handleClick = async () => {
    console.log("test");

    // GETの場合
    // const response = await fetch("http://127.0.0.1:8000/test/?abc=123");

    //POSTの場合
    const response = await fetch("http://127.0.0.1:8000/test/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: "test1" }),
    });

    const data = await response.json();
    console.log(data);
  };
  return (
    <div>
      <div>
        <button className='bg-blue-500 text-white p-2' onClick={handleClick}>
          POST
        </button>
      </div>
      <div>
        <a className='bg-black text-white p-2' href='/complete/' >
          GETへ行く
        </a>
      </div>
    </div>
  )
}

export default CompletePage