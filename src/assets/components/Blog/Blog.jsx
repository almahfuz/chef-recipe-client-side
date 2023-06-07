import React from "react";
import Feedback from "../Feedback/Feedback";

const Blog = () => {
  return (
    <div className="min-h-[calc(100vh-136px)] bg-neutral-300">
      <div className=" py-3 px-4 text-neutral-700  text-sm rounded">
        <p className="font-bold ">
          Tell us the differences between uncontrolled and controlled
          components.
        </p>
        <p>
          Controlled components are those in React that have their state and
          behaviour managed by the parent component. To modify their state and
          behaviour, these components rely on props that are sent down from the
          parent component. Uncontrolled components are those that control their
          own internal state.
        </p>
        <p className="font-bold mt-3 ">
          How to validate react props using proptypes
        </p>
        <p>
          Props are transferred from a parent component to its child components.
          And they are received by kid components. Any data can be sent as a
          prop. So that the child component receives the data they anticipate,
          we need a means to check their data type.
        </p>
        <p className="font-bold mt-3 ">
          Tell us the difference between nodejs and express js.
        </p>
        <p>
          Express is a framework that runs on top of NodeJS and aids in handling
          requests and answers. NodeJS is the package that provides the
          JavaScript run-time environment.
        </p>
        <p className="font-bold mt-3 ">
        What is a custom hook, and why will you create a custom hook?
        </p>
        <p>
          Form validation and other specialised functionality, such as API
          calls, may be handled using custom hooks, which are frequently used
          for managing the local state of components.
        </p>
      </div>
     
    </div>
  );
};

export default Blog;
