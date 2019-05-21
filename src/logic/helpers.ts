export function parseHtml(value: string): string {
    const parser = new DOMParser();
    const dom = parser.parseFromString(
        "<!doctype html><body>" + value,
        "text/html"
    );
    return dom.body.textContent!;
}

export async function ajax<T>(url: string, verb = "GET") {
    return new Promise<T>((resolve, reject) => {
      const invocation = new XMLHttpRequest();
      invocation.open(verb, url, true);
      invocation.setRequestHeader("Content-Type", "text/plain");

      invocation.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
          resolve(JSON.parse(invocation.responseText));
        }
      };
      invocation.send();
    });
  }
