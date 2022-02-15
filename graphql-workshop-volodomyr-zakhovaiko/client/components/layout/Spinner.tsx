import React from "react";

export function Spinner() {
  return (
    <div className="d-flex w-100 justify-content-center my-5">
      <div
        className="spinner-grow my-5"
        style={{ width: "3rem", height: "3rem" }}
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}
