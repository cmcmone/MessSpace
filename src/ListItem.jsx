const numbers = [10, 2, 3, 4, 5, 6];

export default function ListItems(props) {
  // const listItem = numbers.map((item, index) => {
  //   return <li key={index}>{item}</li>;
  // });
  return (
    <ul>
      {numbers.map((item) => (
        <li key={item}> {item} </li>
      ))}
    </ul>
  );
}
