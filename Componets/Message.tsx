import './Message.css';
//PascalCase: Message
//simple function to return a javascript h1 element
function Message()
{
    //this is jsx XML syntax
    const name = "fhulufhelo";


    if (!name) 
        {
            return 
            (
                
              <div className="Main">
                <h1>
                    Hello,{name}!
                </h1>
                <br></br>
                <p>
                        <div className="circle">


                    </div>
                    <h2>
                        Welcome back {name},This is your dashboard.
                        <br>
                        </br>

                    </h2>

                
                   
                     <button className="EnterB">
                        Enter
                        </button>
                     <button>
                                 Log out
                         </button>
                </p>
              </div>
            )
        }
        else{
            return (
             <div className="Main">
                <h1>
                    Hello!
                </h1>
                <br></br>
                <p>
                                            <div className="circle">
                    </div>

                    <h2>
                        Please login or signup to access your dashboard.
                    </h2>
                    <ul>
                        <li>

                           <button className="EnterB">
                            Login  
                           </button>
                        </li>
                        <li>
                            <button>
                                Signup
                            </button>
                        </li>
                       
                    </ul>
                </p>
              </div>
            )
        }
  

            
        }
export default Message;


    