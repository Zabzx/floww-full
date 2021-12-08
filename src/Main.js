import './Main.css';
import Post from './components/Post';
import Nav from './components/Nav';
import Sidebar from './components/Sidebar';
import FeedItem from './components/FeedItem';
import Recommended from './components/Recommended';
import Woman from './img/pfp/woman1.jpg';
import Woman2 from './img/pfp/woman4.jpg';
import Man from './img/pfp/man1.jpg';
import Cat1 from './img/pfp/cat1.jpg';
import Cat2 from './img/pfp/cat2.jpg';
import Lake from './img/feed/lake.jpg';
import Dog from './img/feed/dog.png';
import Paris from './img/feed/paris.jpg';
import { useState } from 'react';

function Main({userPfp, hasPfp}){

    const [feed, setFeed] = useState([
        {
            id: 1,
            pfp: Woman,
            name: 'Sharon Webb',
            text: 'veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. ',
            img: '',
            time: '4:24PM',
            likes: 23
        },
        {
            id: 2,
            pfp: Man,
            name: 'Wilson Smith',
            text: 'Having a relaxing weekend by the lakehouse!',
            img: Lake,
            time: '9:00AM',
            likes: 4
        },
        {
            id: 3,
            pfp: Cat1,
            name: 'bee',
            text: `The power went out at my place so now I'm studying and starbucks, at least the weather is nice.`,
            img: '',
            time: '2:23AM',
            likes: 2
        },
        {
            id: 4,
            pfp: Cat2,
            name: 'Zabz',
            text: 'Learning ReactJS, this is fun!',
            img: '',
            time: '2:24AM',
            likes: 2
        },
        {
            id: 5,
            pfp: Woman2,
            name: 'Kait',
            text: `I can't wait to visit Paris tomorrow!! 💖`,
            img: Paris,
            time: '8:00AM',
            likes: 42
        }
    ])

    const addToFeed = (text) => {
        setFeed([text, ...feed])
        console.log(text)
    }

    document.title = 'Home'
    
    return (
        <>
        <Nav/>
        <div className="main container">
            <div className="main-sidebar">
                <Sidebar/>
            </div>
            <div className="main-feed">
                <Post passUp={addToFeed} userPfp={userPfp} hasPfp={hasPfp}/>
                {feed.map((item) => (
                    <FeedItem item={item} key={item.id}/>
                ))}
            </div>
            <div className="recommended">
                <Recommended/>
            </div>
        </div>
        </>
    )
}

export default Main;