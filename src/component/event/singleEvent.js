import React, { Component } from 'react';
import blog2 from "../../Assets/blog2.jpg";
class SingleEvent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div class="container marginheader">
                <h3 className="text-center ">Past Event</h3>
                <img className="rounded mx-auto d-block mb-3"  src={blog2} alt="images" width="80%" height="80%"/>
            
                <h3 className="text-center">Inaugural Event </h3>
                <div className="container" width="80%">
                    <b><p>The National Space Society (USA) – Mumbai, India Chapter was inaugurated on 15th
December 2019 by the hands of one of the best Engineer at NASA and Boeing, Dr. Ravi
Margasahayam, JPL – NASA solar systems ambassador.
This event was witnessed by ISRO scientists who were instrumental in the Chandrayaan 2
mission and various other missions.</p>
<p>The event consisted of –</p>
<p>1. Inauguration of National Space Society (USA) – Mumbai</p>
<p>2. Seminar by Dr. Ravi Margasahayam (topic – Success through failure)</p>
<p>3. Question and answer session with Dr. Ravi Margasahayam and other Panelists from
ISRO and other reputed companies.</p>
<p>4. Small guidance session for the students.</p>
<p>5. Introduction to MaxQ Talks (New concept developed for introvert people to develop
confidence)Everyone had an amazing experience and approx. 800 number of people attended the
event.</p>
 </b>
                </div>
            </div>
         );
    }
}
 
export default SingleEvent;