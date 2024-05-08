import React from 'react'

const LoginSignup = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "10px",
          width: "400px",
        }}
      >
        <h1 style={{ textAlign: "center" }}>Login</h1>
        <form style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <label style={{ textAlign: "left" }}>Email:</label>
          <input
            style={{ width: "100%", padding: "10px" }}
            type="email"
            placeholder="Enter your email"
          />
          <label style={{ textAlign: "left" }}>Password:</label>
          <input
            style={{ width: "100%", padding: "10px" }}
            type="password"
            placeholder="Enter your password"
          />
          <button
            style={{
              width: "100%",
              backgroundColor: "#ADD8E6",
              borderRadius: "10px",
              padding: "10px",
              cursor: "pointer",
            }}
            type="submit"
          >
            Login
          </button>
        </form>
        <p style={{ textAlign: "center" }}>Forget Password?</p>
        <p style={{ textAlign: "center" }}>
          New to our site? <a href="/signup">Sign up now</a>
        </p>
      </div>
    </div>
  );
};

export default LoginSignup;

