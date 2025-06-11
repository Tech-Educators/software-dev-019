export default function CompanyInfo(props) {
  return (
    <>
      <h1>Company info</h1>
      <p>{props.phone}</p>
      <p>{props.companyName}</p>
    </>
  );
}
