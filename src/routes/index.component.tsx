import { Link } from "@tanstack/react-router";

export const component = function Index() {
  return (
    <div className="p-8">
      <h1 className="text-xl">Hello Starter!</h1>
      <hr />
      <h2 className="pt-5">This page contains following routes:</h2>
      <ul className="list-disc pl-10">
        <li className="text-blue-700 underline">
          <Link to="/page">
            <p>Page1</p>
          </Link>
        </li>
      </ul>
    </div>
  );
};
