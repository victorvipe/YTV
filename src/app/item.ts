export class Item {
    id: {
        kind: string;
        videoId: string;
    }
    snippet: {
        channelId: string;
        channelTitle: string;
        description: string;
        thumbnails: {
            default: {
                height: number;
                url: string;
                width: number;
            }
        }
        title: string;
    }
}
