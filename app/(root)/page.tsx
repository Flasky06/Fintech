import HeaderBox from "@/components/HeaderBox";
import React from "react";

const page = () => {
  const loggedIn = { firstName: "Bonface" };
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
    </section>
  );
};

export default page;
