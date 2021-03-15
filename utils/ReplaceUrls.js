export function replaceUrls(text) {
    const httpStartPosition = text.indexOf('http://')
    const space = text.indexOf('.me', httpStartPosition)

    const url = text.slice(httpStartPosition, space - 1)
    return space != -1 ? text.replace(url, '<a href="' + url + '">' + url + '</a>') : text
}