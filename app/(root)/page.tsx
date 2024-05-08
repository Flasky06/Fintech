import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import React from "react";

const page = () => {
  const loggedIn = {
    firstName: "Bonface",
    lastName: "Njuguna",
    email: "contact@tritva.com",
  };
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access and manage your account and transactions efficiently."
          />
        </header>
      </div>
      <RightSidebar
        user={loggedIn}
        transactions={[]}
        banks={[{ currentBalance: 123.5 }, { currentBalance: 500.5 }]}
      />
    </section>
  );
};

export default page;
