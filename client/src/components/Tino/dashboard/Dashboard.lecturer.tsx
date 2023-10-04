import React from "react";

export const DashboardLecture: React.FC = () => {
  return (
    <>
      <main className="dashboard-container">
        <aside className="dashboard-container__aside">
          <header>
            <h2>Dashboard</h2>
          </header>
        </aside>
        <section className="dashboard-container__main">
            <h1>main content</h1>
        </section>
      </main>
    </>
  );
};
