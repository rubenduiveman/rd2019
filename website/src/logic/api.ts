import { ajax, parseHtml } from "@/logic/helpers";
import { HeaderData, LinkData, PostData, SummaryData } from "../logic/models";

const linksPath = "http://api.rubenduiveman.nl/links.php";
const summariesPath = "http://api.rubenduiveman.nl/posts.php";
const postPath = summariesPath + "?id={{id}}";

// --

export async function getSummaries(): Promise<SummaryData[]> {
    const summaryDatas = await ajax<SummaryData[]>(summariesPath);

    // enrich the summaries with clientside info
    const summaries = summaryDatas.map((summaryData) => {
        return enrichHeaderData(summaryData) as SummaryData;
    });

    return summaries.sort((a, b) => {
        return b.clientDate.getTime() - a.clientDate.getTime();
    });
}

export async function getPost(id: string): Promise<PostData> {
    const postData = await ajax<PostData>(postPath.replace("{{id}}", id));
    return enrichPost(postData) as PostData;
}

export async function getLinks(): Promise<LinkData[]> {
    const linkDatas = await ajax<LinkData[]>(linksPath);

    const links = linkDatas.map((linkData) => {
        return {
            ...linkData,
            description: parseHtml(linkData.description)
        } as LinkData;
    });

    return links.reverse();
}

// --

function enrichPost(data: PostData): PostData {
    return {
        ...enrichHeaderData(data),
        content: parseHtml(data.content)
    };
}

function enrichHeaderData(data: HeaderData): HeaderData {
    return {
        ...data,
        clientUrl: getClientUrl(data),
        clientDate: parseDate(data)
    };
}

function getClientUrl(data: HeaderData): string {
    // client URL is not passed from the server
    return `#/post/${data.id}/${parseTitle(data.title)}`;
}

function parseDate(data: HeaderData) {
    if (!data.date) { return new Date(); }

    // incoming date is in format 2019-02-21
    const date = data.date.split("-");
    return new Date(Number(date[0]), Number(date[1]) - 1, Number(date[2]));
}

function parseTitle(title: string) {
    return title.replace(" ", "-").toLowerCase();
}
