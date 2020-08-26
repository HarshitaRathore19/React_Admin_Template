import React from 'react';




//private comp for authentication
function PrivateComp(Component) 
{
  return function({ token, ...props }) 
       {
          if (token) return (<Component {...props} />);
            return (null);
       }
}



//export private component
export default PrivateComp;