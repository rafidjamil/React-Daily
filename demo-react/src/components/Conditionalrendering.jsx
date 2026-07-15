import React from "react";


const validpassword = () => <h1>Password is valid </h1>;
const invalidpassword = () => <h1>Password is invalid </h1>;
const Password = ({isvalid}) => {
  isvalid ? <validpassword /> : <invalidpassword />
  
  
};
const Conditionalrendering = () => {
  return (
    <section>
      <Password isvalid={false} />
      
      
    </section>
  );
};

export default Conditionalrendering;
// export default password
