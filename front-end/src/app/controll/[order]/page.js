import Controll from "@/components/controll/Controll";

const Page = async ({ params }) => {
  const order = (await params).order;
  return (
    <>
      <Controll orderID={order} />
    </>
  );
};
export default Page;
