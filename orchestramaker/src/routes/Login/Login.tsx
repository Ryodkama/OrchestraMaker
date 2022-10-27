import React, { useState } from "react";
import "./Login.css";
import styled from "styled-components";

// const BodyLogin = styled.body`
//   background: rgb(202, 202, 199);
// `;

const FormContainerdiv = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  form {
    background-color: white;
    width: 70%;
    max-width: 450px;
    padding: 30px;
    border-radius: 10px;
    border: 1px solid #dfdfdf;
    box-shadow: 19px 8px 45px -5px #777777;
    border-radius: 19px;
  }

  h1 {
    text-align: center;
  }

  .uiForm {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 400px;
  }

  .formField {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .formField input {
    border: 1px solid grey;
    padding: 20px;
    border-radius: 4px;
  }

  .formField input:focus {
    outline: none;
  }

  .formField label {
    font-size: 15px;
    font-weight: 600;
    margin-bottom: 3px;
  }

  button {
    background-color: #0e528d;
    width: 100%;
    margin-top: 10px;
    border: none;
    border-radius: 5px;
    padding: 10px 30px;
    color: white;
    cursor: pointer;
    transition: all 0.2s;
  }

  button:hover {
    background-color: #175892;
  }
  .errorMsg {
    color: red;
    margin: 0;
    align-self: flex-start;
  }

  .magOk {
    color: green;
    margin-top: 15px;
  }
`;

const Login = () => {
  const initialValues = { username: "", mailAddress: "", password: "" };
  const [formValues, setFromValues] = useState(initialValues);
  const [formErros, setFromErrors] = useState<any>({});
  const [isSubmit, setIsSubmit] = useState<boolean>(false);

  const handleChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(e.target);
    const { name, value } = e.target;
    setFromValues({ ...formValues, [name]: value });
    console.log(formValues);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //ログイン情報を送信する
    //バリデーションチェックをする
    setFromErrors(validate(formValues));
    setIsSubmit(true);
  };

  const validate = (values: typeof initialValues) => {
    const errors: any = {};
    const regex =
      /^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/;
    if (!values.mailAddress) {
      errors.mailAddress = "メールアドレスを入力してください";
    }
    if (!values.username) {
      errors.username = "ユーザー名を入力してください";
    } else if (!regex.test(values.mailAddress)) {
      errors.mailAddress = "正しいメールアドレスを入力してください";
    }
    if (!values.password) {
      errors.password = "パスワードを入力してください";
    } else if (values.password.length < 4) {
      errors.password = "4文字以上15文字以下にしてください";
    } else if (values.password.length > 15) {
      errors.password = "4文字以上15文字以下にしてください";
    }

    return errors;
  };

  return (
    <FormContainerdiv>
      <form onSubmit={(e) => handleSubmit(e)}>
        <h1>ログインフォーム</h1>
        <hr />
        <div className="uiForm">
          <div className="formField">
            <label>ユーザー名</label>
            <input
              type="text"
              placeholder="ユーザー名"
              name="username"
              onChange={(e) => handleChanged(e)}
            />
          </div>
          <p className="errorMsg">{formErros.username}</p>
          <div className="formField">
            <label>メールアドレス</label>
            <input
              type="text"
              placeholder="メールアドレス"
              name="mailAddress"
              onChange={(e) => handleChanged(e)}
            />
          </div>
          <p className="errorMsg">{formErros.mailAddress}</p>
          <div className="formField">
            <label>パスワード</label>
            <input
              type="text"
              placeholder="パスワード"
              name="password"
              onChange={(e) => handleChanged(e)}
            />
          </div>
          <p className="errorMsg">{formErros.password}</p>
          <button className="submitButton">ログイン</button>
          {Object.keys(formErros).length === 0 && isSubmit && (
            <div className="magOk">ログインに成功しました</div>
          )}
        </div>
      </form>
    </FormContainerdiv>
  );
};

export default Login;
