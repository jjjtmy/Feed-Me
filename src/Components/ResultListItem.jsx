export default function ResultListItem({ eachResult }) {
  return (
    <li>
      <img src={eachResult.image} />
      <p>{eachResult.title}</p>
    </li>
  );
}
