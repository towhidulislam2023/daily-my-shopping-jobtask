import Image from "next/image";
import loginimage from "../assets/Login/login.png";
import LoginForm from "../components/Login/LoginForm";
export default function Home() {
  return (
    <main className="h-[100vh] bg-[#F5F5F5] flex justify-center items-center">
      <div className="flex flex-col lg:flex-row justify-between my-10">
        <div className="lg:w-[50%] bg-white ">
          <Image src={loginimage}  alt="Login Imnage" className="rounded-lg h-full"></Image>
        </div>
        <div className="lg:w-[50%] bg-white ">
          <LoginForm></LoginForm>
        </div>
      </div>
    </main>
  );
}
