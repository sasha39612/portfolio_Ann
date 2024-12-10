import { notFound } from "next/navigation";
import getPropsData from "../../../lib/getPropsData";

export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>
    }) {
    const slug = (await params).slug
    const projectProps = slug ? getPropsData('projects/project', `${slug}.mdx`) : {};

    if (!projectProps) {
        notFound()
    }

    return <h1>My Page</h1>
}
