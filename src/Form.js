import React, { useState } from "react";

const Form = () => {
  const [title, setnameMovie] = useState("");
  const [poster, setUrlMovie] = useState("");
  const [comment, setWhyMovie] = useState("");

  const onChange = e => {
    switch (e.target.name) {
      case "title":
        setnameMovie(e.target.value);
        break;
      case "poster":
        setUrlMovie(e.target.value);
        break;
      case "comment":
        setWhyMovie(e.target.value);
        break;
      default:
        break;
    }
  };

  const submitForm = e => {
    e.preventDefault();
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ title, poster, comment })
    };

    const url = "https://post-a-form.herokuapp.com/api/movies/";
    fetch(url, config)
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          alert(res.error);
        } else {
          alert(`Thank you for adding ${res.title}!`);
        }
      })
      .catch(e => {
        console.error(e);
        alert("Error !!");
      });
  };

  return (
    <div className="FormEmployee">
      <h1>Post your favorite movie</h1>

      <form onSubmit={submitForm}>
        <fieldset>
          <legend>Datas</legend>
          <div className="form-data">
            <label htmlFor="title">Name : </label>
            <input
              type="text"
              id="title"
              name="title"
              onChange={onChange}
              value={title}
              required
            />
          </div>

          <div className="form-data">
            <label htmlFor="poster">Poster : </label>
            <input
              type="text"
              id="poster"
              name="poster"
              onChange={onChange}
              value={poster}
              required
            />
          </div>

          <div className="form-data">
            <label htmlFor="comment">Comment : </label>
            <input
              type="text"
              id="comment"
              name="comment"
              onChange={onChange}
              value={comment}
              required
            />
          </div>
          <hr />
          <div className="form-data">
            <input type="submit" value="Send" />
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default Form;