import React, { Component } from 'react';
import blog1 from "../../Assets/blog1.jpg";
import MainHeader from '../header/mainheader';
import Footer from '../footer/footer';
class 
SingleBlog extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
            <MainHeader/>
            <br/>
            <img className="rounded mx-auto d-block" src={blog1} alt="images" width="100%" height="100%"/>
            <div class="container marginheader">
                <h3 className="text-center ">GRAVITATIONAL LENSING</h3>
                
                <div className="m-3">
                    <p>In the early 1900s the great German physicist Albert Einstein gave his groundbreaking theory of
                       relativity. In the theory, he predicted that space and time is not what we had always perceived,
                       rather, it is a 4-dimensional net-a fabric of spacetime. This fabric bent around any object existing in
                       the fabric. The distortion increased near massive objects and was negligible around tiny bodies like
                       us. This gave rise to a new concept of gravity. For generations gravity was considered to be the
                       weakest of all the fundamental forces and was considered to be an attractive force between two
                       masses. Now according to Einstein’s theory, gravity was causing a spacetime distortion, which was
                       the new reason to explain the revolution of planets around massive bodies like sun.
                       </p>
                       <p>Light has been a mystery since forever, but some properties were absolutely right then and are true
                       even now. For example: light travels in straight line. This property was the reason we could see the
                       candle from a straight pipe and not from a bent one- one of the most exciting experiments we did as
                        a kid. Now since light is a form of energy with 0 mass, it usually reflects, refracts etc., when it faces
                       any hinderance. So, if the path that the light is travelling through is distorted, it has no choice but to
                    deflect along with these distortions.
                    </p>
                    <p>You might be wondering why I am discussing two quite different topics in one single blog. Well, let
                   us discuss an experiment performed by Sir Arthur Eddington in 1919. Sir Arthur wanted a proof to
                   the new concept of gravity predicted by Einstein. In his paper published in the 1911, Einstein had
                   predicted the values of the amount of gravitational deflection of starlight which was a proof for his
                  theory of general relativity, published in 1915. Thus, taking the advantage of a full solar eclipse and  
                   the property that light travels in straight lines, Sir Arthur started observing a star located on the edge 
                  of the solar disc. The experiment was carried out by two expeditions. One to the West African island
                   of Principe and the other one to the Brazilian town of Sobral. If Einstein’s theory were right, the star
                 would be deflected radially away from the sun by about 1.75 arcseconds. The deflection coefficient
                that came led between 1.80 and 2.16 arcseconds. Hence proving the bending of light in the bent
              spacetime net.
              </p>
              <p>Now, the above experiment we experience a phenomenon we now refer to as THE GRAVITATIONAL
LENSING. The light emitted by distant galaxies and stars when pass through the gravitational fields of
massive objects, they tend to bend and get distorted. Since a similar property is exhibited by convex
lenses, this phenomenon was named as gravitational lensing.</p>

<p>One amazing example of gravitational lensing was observed in 1979, when scientist discovered a
double quasar. It later turned out to be one single quasar whose light was deflected by the
intervening galaxies. Therefore, we got two images of one single quasar. This property of galaxies
acting as a lens was postulated by an astronomer Fritz Zwicky.</p>

<p>Light from the object which bends around the massive bodies in front of it, sends the light from all
the sides of the object, forward. This helps us gain a bigger and brighter than original. Now since we
know what Gravitational lensing actually is, let us see how it is the most brilliant too to study the
history of the universe, dark matter and the things which were unobservable before.</p>

<p>Gravitational lensing is classified into three broad categories.</p>
<h4>1) STRONG LENSING</h4>
<p>It is a type of gravitational lensing that is strong enough to produce multiple images, arcs or even
Einstein’s ring. For point like objects we usually get multiple images and for extended objects, it acts
like a magnifying glass. So, we usually get an arc or a ring. The strong lensing requires the projected
lens mass density to be greater than the critical density (the average density of matter required for
the universe to just halt its expansion). The strong lensing was predicted by Albert Einstein and
hence the ring that we observe is called the Einstein’s ring. The ring usually appears when the quasar
and the lens are aligned perfectly. The light from the quasar forms this perfect ring. If the perfect
alignment is not possible, we observe arcs. Galaxies produce a heavenly bright, smeared, and
magnified image, thus helping scientists determine the distance, masses etc. of these unforeseen
galaxies.</p>
<h4>2) WEAK LENSING</h4>
<p>The weak lensing helps us prove the existence of dark matter. Here the scattered mass acts as our
lens. Dark matter has mass and it can act as a lens for other objects. Thus, we can observe the dark
matter in the foreground. Galaxy clusters have approximately 80% of its content in the form of dark
matter. The fields of these clusters deflect light travelling near them. The observer for the earth sees
a dramatic distortion of a background source such as multiple images and arcs. The cluster mass
estimates determined by the lensing is valuable because it potentially reveal dark clusters which
contains over dense concentration of dark matter. One of the most successful experiments in
studying dark matter is the Dark Energy Survey.</p>
<h4>3) MICROLENSING</h4>
<p>Microlensing is a phenomenon which can used to detect objects that range from the mass of a
planet to the mass of a star, regardless of the light they emit. It happens only when small objects
pass in front of a background source or lens. This technique has been used to detect planets which
are orbiting the lens rather than the object which emits light. It was also used to detect Massive
Compact Halo Objects or MACHOs. It was the dark matter candidate which was the size of our
Jupiter. It enables the study of the population of Faint or dark objects like, brown dwarfs, red dwarfs
and even blackholes. It works upon all wavelengths, magnifies distant source objects that emit any
kind of electromagnetic radiation.</p>
<p>Who knew, when we combined gravity and light, we could actually make the most powerful lenses
and we could see what was lurking behind and even forward in the whole universe. The dark matter,
the cosmic wave background, we can detect them all by this magnificent GRAVITATIONAL LENSING.
It is one of the most promising method to discover the history of universe. The future awaits when
this gravitational lensing will tear the limitations put up by us and introduce us with the universe
lurking behind those limitation.</p>
                </div>
            </div>
            <Footer/>
            </div>
         );
    }
}
 
export default SingleBlog;