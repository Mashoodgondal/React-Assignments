import React from "react";

function Form() {
  return (
    <div>
      <h1>My feedback form</h1>
      <ul>
        <li>
          <p>
            Name: <input type="text" />
          </p>
        </li>
        <li>
          <p>
            Email: <input type="text" />
          </p>
        </li>
        <li>
          <p>
            Password: <input type="password" name="password" />
          </p>
        </li>
        <li>
          <p>Please check all the emotions that apply to you:</p>
          <ul>
            <li>
              <label>
                Angry
                <input type="checkbox" checked />
              </label>
            </li>
            <li>
              <label>
                Sad <input type="checkbox" />
              </label>
            </li>
            <li>
              <label>
                Happy <input type="checkbox" />
              </label>
            </li>
            <li>
              <label>
                Ambivalent <input type="checkbox" />
              </label>
            </li>
          </ul>
        </li>
        <li>
          <p>How satisfied were you with our service?</p>
          <ul>
            <li>
              <label>
                Very satisfied <input type="radio" checked />
              </label>
            </li>
            <li>
              <label>
                Satisfied <input type="radio" />
              </label>
            </li>
            <li>
              <label>
                Don't care <input type="radio" />
              </label>
            </li>
            <li>
              <label>
                Dissatisfied <input type="radio" />
              </label>
            </li>
            <li>
              <label>
                Very dissatisfied <input type="radio" />
              </label>
            </li>
          </ul>
        </li>
        <li>
          <p>
            Further comments <textarea name="comment"></textarea>
          </p>
        </li>
        <li>
          <p>
            Bio Photo: <input type="file" />{" "}
            <input type="submit" name="choose" value="Choose" />
          </p>
        </li>
        <li>
          <p>
            Location visited:{" "}
            <iframe src="http://maps.google.com/maps"></iframe>
          </p>
        </li>
        <li>
          <input type="submit" name="submit" value="Submit" />
        </li>
      </ul>
    </div>
  );
}

export default Form;
