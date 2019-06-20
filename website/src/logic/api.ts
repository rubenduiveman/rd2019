import { ajax, parseHtml } from "@/logic/helpers";
import { DataType } from "../logic/enums";
import { HeaderData, LinkData, PostData, SummaryData } from "../logic/models";


const linksPath = "http://api.rubenduiveman.nl/links.php";
const postSummariesPath = "http://api.rubenduiveman.nl/posts.php";
const postPath = postSummariesPath + "?id={{id}}";
const caseStudySummariesPath = "http://api.rubenduiveman.nl/posts.php";
const caseStudyPath = caseStudySummariesPath + "?id={{id}}";

// --

export async function getCaseStudySummaries(): Promise<SummaryData[]> {
    const summaryDatas = await ajax<SummaryData[]>(caseStudySummariesPath);

    // enrich the summaries with clientside info
    const summaries = summaryDatas.map((summaryData) => {
        return enrichHeaderData(DataType.CASESTUDIES, summaryData) as SummaryData;
    });

    return summaries.sort((a, b) => {
        return b.clientDate.getTime() - a.clientDate.getTime();
    });
}

export async function getCaseStudy(id: string): Promise<PostData> {
    const postData = await ajax<PostData>(caseStudyPath.replace("{{id}}", id));
    return enrichPost(DataType.CASESTUDIES, postData) as PostData;
}

export async function getPostSummaries(): Promise<SummaryData[]> {
    const summaryDatas = await ajax<SummaryData[]>(postSummariesPath);

    // enrich the summaries with clientside info
    const summaries = summaryDatas.map((summaryData) => {
        return enrichHeaderData(DataType.BLOG, summaryData) as SummaryData;
    });

    return summaries.sort((a, b) => {
        return b.clientDate.getTime() - a.clientDate.getTime();
    });
}

export async function getPost(id: string): Promise<PostData> {
    const postData = await ajax<PostData>(postPath.replace("{{id}}", id));
    return enrichPost(DataType.BLOG, postData) as PostData;
}

export async function getLinks(): Promise<LinkData[]> {
    const links = await ajax<LinkData[]>(linksPath);
    return links.reverse();
}

// --

function enrichPost(type: DataType, data: PostData): PostData {
    return {
        ...enrichHeaderData(type, data),
        content: parseHtml(data.content)
    };
}

function enrichHeaderData(type: DataType, data: HeaderData): HeaderData {
    return {
        ...data,
        clientUrl: getClientUrl(type, data),
        shareUrl: getShareUrl(type, data),
        clientDate: parseDate(data)
    };
}

function getClientUrl(type: DataType, data: HeaderData): string {
    // client URL is not passed from the server
    switch (type) {
        case DataType.BLOG:
            return `/post/${data.id}/${parseTitle(data.title)}`;
        case DataType.CASESTUDIES:
            return `/casestudy/${data.id}/${parseTitle(data.title)}`;
    }
}

function getShareUrl(type: DataType, data: HeaderData): string {
    // share URL is not passed from the server
    switch (type) {
        case DataType.BLOG:
            return `${window.location.origin}/#/post/${data.id}`;
        case DataType.CASESTUDIES:
            return `${window.location.origin}/#/casestudy/${data.id}`;
    }

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
