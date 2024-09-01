// import React from 'react';
// import { Link } from '@tanstack/react-router';

// const Home: React.FC = () => {
//   return (
    
//     <div className='flex justify-center' style={{display: "flex", flexDirection:"column", alignItems: "center"}}>
//     <h2>Welcome to the Data Dashboard</h2>
//     <p>Select an endpoint to fetch data:</p>
//     <ul>
//       <li>
//         <Link 
//           to="/dataDisplay"
//           search={{ endpoint: 'ip' }} 
//         >
//           Fetch IP Data
//         </Link>
//       </li>
//       <li>
//         <Link 
//           to="/dataDisplay"
//           search={{ endpoint: 'date' }} 
//         >
//           Fetch Date Data
//         </Link>
//       </li>
//       <li>
//         <Link 
//           to="/dataDisplay"
//           search={{ endpoint: 'time' }} 
//         >
//           Fetch Time Data
//         </Link>
//       </li>
//     </ul>
//   </div>
//   )
// }

// export default Home

import React from 'react';
import { Link } from '@tanstack/react-router';
import '../styles.css'; // Import the CSS file

const Home: React.FC = () => {
  return (
    <div className='home-container'>
      <h2>Welcome to the Data Dashboard</h2>
      <p>Select an endpoint to fetch data:</p>
      <ul>
        <li>
          <Link 
            to="/dataDisplay"
            search={{ endpoint: 'ip' }} 
          >
            Fetch IP Data
          </Link>
        </li>
        <li>
          <Link 
            to="/dataDisplay"
            search={{ endpoint: 'date' }} 
          >
            Fetch Date Data
          </Link>
        </li>
        <li>
          <Link 
            to="/dataDisplay"
            search={{ endpoint: 'time' }} 
          >
            Fetch Time Data
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
