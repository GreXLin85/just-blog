import { BlogPostProps } from "../types";

const BlogPost: React.FC<BlogPostProps> = (props) => {
    const { children, ...rest } = props;
    const { info } = rest;
    console.log(rest);

    return (
        <div className={'BlogPost'}>
            <div className={'BlogPostTitle'}>
                {info.title}
            </div>
            <div className={'BlogPostDescription'}>
                {info.description.substring(0, 200)}
                {' '}... <a href={info.url}>read more</a>
            </div>
            <div className={'BlogPostTags'}>
                {info.tags.map((tag, index) => {
                    return (
                        <div key={index} className={'BlogPostTag'}>
                            {tag}
                        </div>
                    )
                })
                }
            </div>
        </div>
    )
}

export default BlogPost;