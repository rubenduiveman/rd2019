import { ajax, parseHtml } from "@/logic/helpers";
import { DataType } from "../logic/enums";
import { DesignData, DesignServerData, HeaderData, LinkData, PostData, SummaryData } from "../logic/models";


const protocol = (window.location.protocol.indexOf("https") > -1) ? "https://" : "http://";

const apiBase = protocol + "api.rubenduiveman.nl";

const linksPath = apiBase + "/links.php";
const postSummariesPath = apiBase + "/posts.php";
const postPath = postSummariesPath + "?id={{id}}";
const caseStudySummariesPath = apiBase + "/casestudies.php";
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

export async function getDesigns(): Promise<DesignData[]> {
    return new Promise((resolve) => {
        // tslint:disable:max-line-length
        const serverData: DesignServerData[] = [
            {
                name: "FileLinx IFS",
                description: "The FileLinx software is an incredibly powerful no-code modeling software platform in which all sorts of solutions can be modeled by business consultants. In over ten years, the platform evolved from a software application with “just” modelable forms to a full-fledged B2B SaaS platform providing workflow functionality, dashboards and process management features. <br/><br/>This new product was to be an evolved version of that platform. We wanted accommodate growth for this platform, so we focused on delivering a product that was based on building blocks and interaction patterns that were extendable. Read more in the <a href='/#/casestudy/2019-06-19'>case study</a>!",
                coverImageUrl: "https://cdn.rubenduiveman.nl/ifs/cover.png",
                seriesUrls: [
                    "https://cdn.rubenduiveman.nl/ifs/dashboard.png",
                    "https://cdn.rubenduiveman.nl/ifs/search.png",
                    "https://cdn.rubenduiveman.nl/ifs/details.png",
                    "https://cdn.rubenduiveman.nl/ifs/timeline.png"]
            },
            {
                name: "Uptrends Uptime Tool",
                description: "Uptrends provides a series of free tools to monitor and measure websites. One of these tools is the Uptime Tool, which is used to see if a website is available across the globe. We knew we could deliver more valuable details on the tool results, so we worked on an improved version.",
                coverImageUrl: "https://cdn.rubenduiveman.nl/uptimetool/cover.jpg",
                seriesUrls: [
                    "https://cdn.rubenduiveman.nl/uptimetool/whiteboard.jpg",
                    "https://cdn.rubenduiveman.nl/uptimetool/input-states.jpg",
                    "https://cdn.rubenduiveman.nl/uptimetool/responsive-rows.jpg",
                    "https://cdn.rubenduiveman.nl/uptimetool/final.jpg",
                ]
            },
            {
                name: "Uptrends Mobile App [concept]",
                description: "As input for some rework on the Uptrends Mobile App, and as a thought experiment on responsiveness for this app, I created this mobile app concept. It allows the user to have a detailed insight in the current status of their monitors, as well as an insight in what happened the last 24 hours.",
                coverImageUrl: "https://cdn.rubenduiveman.nl/ut4app/phone-home.jpg",
                seriesUrls: [
                    "https://cdn.rubenduiveman.nl/ut4app/phone-home.jpg",
                    "https://cdn.rubenduiveman.nl/ut4app/phone-select-group.jpg",
                    "https://cdn.rubenduiveman.nl/ut4app/ipad-portrait-home.jpg",
                    "https://cdn.rubenduiveman.nl/ut4app/phone-details.jpg",
                    "https://cdn.rubenduiveman.nl/ut4app/phone-alerts.jpg",
                    "https://cdn.rubenduiveman.nl/ut4app/ipad-portrait-details.jpg",
                    "https://cdn.rubenduiveman.nl/ut4app/ipad-landscape-details.jpg",
                    "https://cdn.rubenduiveman.nl/ut4app/desktop-app.jpg"
                ]
            }, {
                name: "Tasting Companion App",
                description: "I really like whisky, and the most important part of whisky is tasting the whisky. I couldn't find any mobile apps that matched my requirements on how I wanted to store my tasting notes, so I decided to build my own.",
                coverImageUrl: "https://cdn.rubenduiveman.nl/tasting-companion/collection.jpg",
                seriesUrls: [
                    "https://cdn.rubenduiveman.nl/tasting-companion/collection.jpg",
                    "https://cdn.rubenduiveman.nl/tasting-companion/details-emptybottle.jpg",
                    "https://cdn.rubenduiveman.nl/tasting-companion/details-wishlist.jpg"
                ]
            }
            // {
            //     name: "FBN Customer Portal",
            //     description: "To provide clients of FBN with an environment to select and enroll in notary-related courses, a custom made portal was developed. The portal was connected to the FileLinx Platform for data management, and visually based off the client brand.",
            //     coverImageUrl: "",
            //     seriesUrls: []
            // },
            // {
            //     name: "Optitrade Online",
            //     description: "Online platform",
            //     coverImageUrl: "",
            //     seriesUrls: []
            // }
        ];
        // tslint:enable:max-line-length

        const designs: DesignData[] = serverData.map((design: DesignServerData): DesignData => {
            return {
                urlName: getDesignClientUrlName(design.name),
                ...design
            };
        });

        resolve(designs);
    });
}

export async function getDesign(name: string): Promise<DesignData> {
    return new Promise(async (resolve) => {
        const serverData = await getDesigns();
        resolve(serverData.find((design) => design.urlName === name));
    });
}

// --

function getDesignClientUrlName(name: string): string {
    return name.toLowerCase();
}

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
