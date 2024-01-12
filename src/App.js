import React from "react";
import "./styles.css";

const Empty = () => {
  return <div className="empty-component">Im empty!!</div>;
};

const List = ({ items }) => {
  return items.length ? (
    items.map((item) => <ul key={item}>{item}</ul>)
  ) : (
    <Empty />
  );
};

const CSSList = ({ items }) => {
  return (
    <ul>
      {items?.map((item) => (
        <li key={item}>{item}</li>
      ))}
      <Empty />
    </ul>
  );
};

export default function App() {
  const items = ["Item 1", "Item 2", "Item 3"];

  return (
    <div className="App">
      {/* <List items={items} /> */}
      <CSSList items={items} />
    </div>
  );
}
