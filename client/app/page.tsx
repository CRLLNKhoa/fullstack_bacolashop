import HeaderStore from "@/components/globalComponents/headerStore";
import NoticStore from "@/components/globalComponents/noticStore";
import TopNav from "@/components/globalComponents/topNav";

export default function Home() {
  return (
    <main className="flex flex-col">
      <NoticStore />
      <TopNav />
      <HeaderStore />
    </main>
  );
}
