import { LOGOUT } from "@/constants/a";
import Main from "./modals/Main";

export default function Home() {
  return (
    <main className="text-primary-100 Body1_20_B">
      {LOGOUT}11
      <div className="text-black">
        <Main />
      </div>
    </main>
  );
}
