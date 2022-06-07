import React from 'react';
import Title from "components/Title";
import User from "components/User";

const App = () => {
  return (
    <div>
      <section>
        <Title type="small" title="小字" />
        <Title type="large" title="大字" />
        <User />
      </section>
    </div>
  )
}

export default App;