import React, { Component } from 'react'
import Sound from '../../Assets/Sound'
import Sound2 from '../../Assets/Sound2'
import Sound3 from '../../Assets/Sound3'
import Sound4 from '../../Assets/Sound4'
import Sound5 from '../../Assets/Sound5'
import Sound6 from '../../Assets/Sound6'
import Sound7 from '../../Assets/Sound7'
import Sound8 from '../../Assets/Sound8'
import Sound9 from '../../Assets/Sound9'

class About extends Component {
  render(){
    return(
      <div className="progress">
        <div className="container">
        <h4>Beyonce</h4>
        <p className="text">Beyoncé Giselle Knowles-Carter is an American singer-songwriter and actress. Born and raised in Houston, Texas, Beyoncé performed in various singing and dancing competitions as a child. She rose to fame in the late 1990s as lead singer of the R&B girl-group Destiny's Child.</p>
        <Sound />
        </div>

        <div className="container">
        <h4>Nicki Minaj</h4>
        <p className="text">Onika Tanya Maraj, known professionally as Nicki Minaj, is a Trinidadian-born rapper, singer, songwriter, actress, and model</p>
        <Sound2 />
        </div>

        <div className="container">
        <h4>Flume</h4>
        <p className="text">Harley Edward Streten, known professionally as Flume, is an Australian record producer, musician and DJ. His self-titled debut studio album, Flume, was released on 9 November 2012 to positive reviews, topping the ARIA Albums Chart and reaching double-platinum accreditation in Australia</p>
        <Sound3 />
        </div>

        <div className="container">
        <h4>Drake</h4>
        <p className="text">Aubrey Drake Graham is a Canadian rapper, singer, songwriter, actor, producer, and entrepreneur. Drake gained recognition as an actor on the teen drama television series Degrassi: The Next Generation in the early 2000s</p>
        <Sound4 />
        </div>

        <div className="container">
        <h4>Lil Nas X</h4>
        <p className="text">Montero Lamar Hill, better known as Lil Nas X, is an American rapper, singer, and songwriter from Atlanta, Georgia. He is best known for his country rap breakout single "Old Town Road", which achieved viral popularity as part of the "Yeehaw Challenge" on the video sharing app TikTok</p>
        <Sound5 />
        </div>

        <div className="container">
        <h4>Ariana Grande</h4>
        <p className="text">Ariana Grande-Butera is an American singer, songwriter, and actress. As one of the world's leading contemporary recording artists, she is known for her wide vocal range. Born in Boca Raton, Florida, Grande began her career in 2008 in the Broadway musical, 13</p>
        <Sound6 />
        </div>

        <div className="container">
        <h4>Davido</h4>
        <p className="text">David Adedeji Adeleke, better known by his stage name Davido, is a Nigerian singer, songwriter, and record producer. Born in Atlanta and raised in Lagos, Davido made his music debut as a member of the music group KB International</p>
        <Sound7 />
        </div>

        <div className="container">
        <h4>Todrick Hall</h4>
        <p className="text">Todrick Hall is an American singer, songwriter, actor, director, choreographer, and YouTuber. He first gained national attention on the ninth season of the reality singing competition American Idol, where he made it to the semi-finals</p>
        <Sound8 />
        </div>

        <div className="container">
        <h4>Lil Baby</h4>
        <p className="text">Dominique Johnson, known professionally as Lil Baby, is an American rapper, singer and songwriter from Atlanta, Georgia. He rose to attention and acclaim in 2017, when he released his mixtape Perfect Timing.</p>
        <Sound9 />
        </div>
      </div>
    )
  }
}
export default About
