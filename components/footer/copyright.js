import Link from "next/link";

const copyright =  () => {
  return (
    <div style={{ margin: "8px"}}>
      <span style={{ fontSize: "12px" }}>
        <Link href="/privacy-policy">Privacy Policy</Link> | ©{" "}
        {new Date().getFullYear()} Massage On Main LLC
      </span>
    </div>
  );
};

export default copyright;