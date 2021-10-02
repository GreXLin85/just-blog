import { LeftBar, BlogSection } from './';

import { faStore, faCloud } from '@fortawesome/free-solid-svg-icons'

const MainSection: React.FC = (props) => {
    return (
        <div className={'MainSection'}>
            <LeftBar title={'Explore'} items={[
                { label: "Store", url: "#", icon: faStore },
                { label: "Cloud", url: "#", icon: faCloud }
            ]}/>
            <BlogSection />
        </div>
    );

}

export default MainSection;