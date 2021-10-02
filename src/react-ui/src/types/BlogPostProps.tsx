export interface BlogPostProps {
    info: {
        title: string;
        date: Date;
        description: string;
        image?: string;
        tags: string[];
        url: string;
    }
}