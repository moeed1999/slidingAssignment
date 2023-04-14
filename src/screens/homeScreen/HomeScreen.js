import React, {useMemo, useState} from 'react'
import ReactPageScroller from "react-page-scroller";
import Home from '../Home/Home';
import Services from '../Services/Services';
import Team from '../Team/Team';

const HomeScreen = () => {
    const [currentPage, setCurrentPage] = useState(0)

    const handlePageChange = (num) => {
        setCurrentPage(()=>{ return  num })
    }

    const onPageChange = useMemo(() => handlePageChange, []);

    return (
        <div>
            <ReactPageScroller
                pageOnChange={onPageChange}
            >
                <section className="full-page">
                    <Home  currentPage={currentPage}/>
                </section>
                <section className="full-page" >
                    <Services currentPage={currentPage}  />
                </section>
                <section className="full-page">
                    <Team currentPage={currentPage}/>
                </section>
            </ReactPageScroller>
        </div>
    );
}

export default HomeScreen