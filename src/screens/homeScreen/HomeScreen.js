import React, {useState} from 'react'
import ReactPageScroller from "react-page-scroller";
import Home from '../Home/Home';
import Services from '../Services/Services';
import Team from '../Team/Team';

const HomeScreen = () => {
    const [currentPage, setCurrentPage] = useState(0)

    const onPageChange = (num) => {
        setCurrentPage(num)
    }

    return (
        <div>
            <ReactPageScroller
                pageOnChange={onPageChange}
            >
                <section className="full-page">
                    <Home  currentPage={currentPage === 0}/>
                </section>
                <section className="full-page">
                    <Services currentPage={currentPage === 1}/>
                </section>
                <section className="full-page">
                    <Team currentPage={currentPage === 2}/>
                </section>
            </ReactPageScroller>
        </div>
    );
}

export default HomeScreen