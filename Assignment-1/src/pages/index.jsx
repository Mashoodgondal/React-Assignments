import img from "./xyz.JPG";

import React from "react";

function Page() {
  return (
    <>
      <span>
        <img
          src={img}
          alt="xyz.jpg"
          style={{ width: "200px", height: "300px", float: "left" }}
        />
      </span> 
      <span>
        <h1 id="mm">Mashood Ali</h1>
        <em>Software Engineer</em>
        <p>
          I 💜 web Development and I guide coding enthusiasts 🚀
        </p>

        <ul>
          <li><a href="#oo">Education</a></li>
          <li><a href="#p">Internship</a></li>
          <li><a href="#q">Projects</a></li>
          <li><a href="#r">Connect with me</a></li>
        </ul>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <hr />

        <h2 id="oo">Education</h2>
        <table border="1">
          <tr>
            <td>Course</td>
            <td>Institute</td>
            <td>Year</td>
            <td>Result</td>
          </tr>

          <tr>
            <td>BSCS</td>
            <td>RIUF Faisalabad</td>
            <td>2019</td>
            <td>74.9%</td>
          </tr>

          <tr>
            <td>12<sup>th</sup> Grade</td>
            <td>GSTC, Faisalabad</td>
            <td>2014</td>
            <td>94.4%</td>
          </tr>
        </table>

        <h2 id="p">Internship</h2>
        <p>
          <strong>Pakwheels</strong> Pakistan's largest car selling place
        </p>
        <em>Android Developer Intern</em>
        <ul>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat minus
            quisquam, accusantium at commodi, corrupti mollitia explicabo
            cupiditate ipsum repellat
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
            corrupti soluta, commodi optio dicta ull
          </li>
        </ul>

        <h2 id="q">Projects</h2>
        <ul>
          <li>
            <h3>Ethereum Voting</h3>
            <ul>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad aut
                soluta dolores laudantium error quis, in libero omnis neque iusto
                temporibus nobis
              </li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            </ul>
          </li>
          <li>
            <h3>Shuffler</h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            dolores veritatis sequi repellat commodi totam fugit est! Nam,
            voluptatum nobis vel, magni officiis distinctio
          </li>
        </ul>
        <hr />
        <h2 id="r">Connect With Me</h2>
        <p>Email: <a href="mailto:mashoodali@gmail.com">mashoodali@gmail.com</a></p>
        <p>Github: <a href="https://github.com/mashodAli">github.com/mashodAli</a></p>
        <p>Phone: <a href="tel:923406925342">9234046925342</a></p>
        <p><a href="#mm">Back to top</a></p>
      </span>
    </>
  );
}

export default Page;
