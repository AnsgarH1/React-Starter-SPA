import { Link } from "@tanstack/react-router";

export const component = function Index() {
  return (
    <div className="p-8">
      <h1 className="text-xl">AOE Academy - React Training</h1>
      <hr />
      <h2 className="pt-5">Examples</h2>
      <ul className="list-disc pl-10">
        <li className="text-blue-700 underline">
          <Link to="/dataflow">
            <p>Dataflow</p>
          </Link>
        </li>
      </ul>
    </div>
  );
};
