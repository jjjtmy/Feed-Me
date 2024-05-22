export default function ResultListItem({ eachResult }) {
  return (
    <li>
      <img src={eachResult.image} />
      <div>{eachResult.title}</div>
    </li>
  );
}
