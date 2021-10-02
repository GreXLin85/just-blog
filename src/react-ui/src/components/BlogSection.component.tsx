import { BlogPost } from './';

const BlogSection: React.FC = (props) => {
    const postInfo = {
        title: 'Why should we use React',
        description: 'React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications. However, React can also be used in the creation of React.js or React Native applications, which use its specific rendering engine to speed up their development time.',
        date: new Date(),
        tags: ['react'],
        url: 'https://reactjs.org/',
    }

    return (
        <div className={'BlogSection'}>
            <BlogPost info={postInfo} />
            <BlogPost info={postInfo} />
            <BlogPost info={postInfo} />
        </div>
    );

}

export default BlogSection;