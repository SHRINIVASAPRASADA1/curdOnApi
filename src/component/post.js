import React, { useState } from "react";
import "./css/POST.css";
import axios from "axios";
import { useEffect } from "react";
export default function PostRequest(props) {
  const [title, setTitle] = useState("");
  const [des, setDes] = useState("");
  const [id1, setId] = useState("");
  const [myapi, setMyapi] = useState([]);

  let updateData = (value1, value2, idN) => {
    setTitle(value1);
    setDes(value2);
    setId(idN);
  };

  async function GetApiData() {
    let responce = await axios.get("http://23.22.132.117");
    setMyapi(responce.data);
  }

  useEffect(() => {
    GetApiData();
  });
  return (
    <div>
      <input
        id="title"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        type="text"
        name="title"
      />{" "}
      <br />
      <input
        id="des"
        value={des}
        onChange={(e) => setDes(e.target.value)}
        type="text"
        name="content"
      />{" "}
      <br />
      <button
        onClick={() => {
          axios.post("http://23.22.132.117", { title: title, content: des });

          setDes("");
          setTitle("");
        }}
        id="sent"
        type="submit"
      >
        Add
      </button>
      <button
        onClick={() => {
          axios.put("http://23.22.132.117", {
            title: title,
            content: des,
            id: id1,
          });
          alert("the Id Requested to Delete " + id1);
          setDes("");
          setTitle("");
        }}
        id="sent"
        type="submit"
      >
        UPDATE
      </button>

      {/* updatee  */}
      <button
        onClick={() => {
          
          axios.delete("http://23.22.132.117:8000/delete/"+id1+"/", {
            title: title,
            content: des,
            id: id1,
          });
          alert("the Id Requested to Delete " + id1);
          setDes("");
          setTitle("");
        }}
        id="sent"
        type="submit"
      >
        DELETE
      </button>
      <div>
        <h1 id="titles"> Items </h1>
        {myapi.map((datas, i) => {
          return (
            <div
              onClick={() => {
                updateData(datas.title, datas.content, datas.id);
              }}
              className="block-data"
            >
              <h4>{datas.title}</h4>
              <p>{datas.content}</p>
              <p>{datas.date}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
