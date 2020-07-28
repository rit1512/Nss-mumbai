import  React, { Component }  from  'react';
import CoolTabs from 'react-cool-tabs';

class Content1 extends Component {
  render() {
    return <div className="container mt-3">
     <p>The National Space Society (NSS) is an independent, educational, grassroots, non-profit organization dedicated to the creation of a spacefaring civilization. Founded as the National Space Institute (1974) and L5 Society (1975), which merged to form NSS in 1987, NSS is widely acknowledged as the preeminent citizen’s voice on space. NSS has over 50 chapters in the United States and around the world. The society also publishes Ad Astra magazine, an award-winning periodical chronicling the most important developments in space.</p>
      <hr/>  
    </div>
  }
}
class Content2 extends Component {
  render() {
    return <div className="container mt-3">
     <p>We believe in STEM learning and working on multiple research work. We have Internships, Online Education, etc upcoming soon. Multiple events and webinars are organised by the National Space Society(USA)-Mumbai Chapter, so stay tuned to our website and our social media pages!</p>
    <hr />
	</div>
  }
}

class  TABS  extends Component{
render() {
   return (
     <div className="container-fluid mb-5">
	     <CoolTabs
	       tabKey={'1'}
	       style={{ width:"100%", height:200, background:  'white' }}
	       activeTabStyle={{ background:  'white', color:  'black' }}
	       unActiveTabStyle={{ background:  'white', color:  'black' }}
	       activeLeftTabBorderBottomStyle={{ background:  '#0275d8', height:  4 }}
	       activeRightTabBorderBottomStyle={{ background:  '#0275d8', height:  4 }}
	       tabsBorderBottomStyle={{ background:  'white', height:  4 }}
	       leftContentStyle={{ background:  'white' }}
	       rightContentStyle={{ background:  'whte' }}
	       leftTabTitle={'What is NSS?'}
	       rightTabTitle={'What do we do?'}
	       leftContent={<Content1/>}
	       rightContent={<Content2/>}
	       contentTransitionStyle={'transform 0.6s ease-in'}
	       borderTransitionStyle={'all 0.6s ease-in'}/>
     </div>
);
}
}
export default TABS;