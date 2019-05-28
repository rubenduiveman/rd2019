export interface HeaderData {
    id: string;
    title: string;
    url: string;
    date: string;
    tags: string[];
    clientDate: Date;
    clientUrl: string;
}

export interface SummaryData extends HeaderData {
    summary: string;
}

export interface PostData extends HeaderData {
    content: string;
}

export interface LinkData {
    title: string;
    url: string;
    date: string;
    description: string;
}
