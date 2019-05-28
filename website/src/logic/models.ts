export interface HeaderData {
    id: string;
    title: string;
    url: string;
    date: string;
    tags: string[];
    clientDate: Date;
    clientUrl: string;
    shareUrl: string;
    summary: string;
}

// tslint:disable-next-line: no-empty-interface
export interface SummaryData extends HeaderData { }

export interface PostData extends HeaderData {
    content: string;
}

export interface LinkData {
    title: string;
    url: string;
    date: string;
    description: string;
}
