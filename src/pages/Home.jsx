import Today from '../components/Today'
import data from '../assets/data/menu-data.json'

export default function Home() {
    return (
        <div id='home'>
            <figure></figure>
            <h2 className='m-5 p-5 text-center'>Today's Menu</h2>
            <Today data ={data} />
        </div>
    )
}