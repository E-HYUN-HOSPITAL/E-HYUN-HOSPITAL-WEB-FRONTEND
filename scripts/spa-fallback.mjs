// GitHub Pages는 SPA 하위 주소(/care/botox 등)를 모르기 때문에
// 빌드 결과(dist/index.html)를 각 메뉴 주소와 404.html로 복사한다.
// → 하위 주소로 바로 들어오거나 새로고침해도 빈 화면 없이 정상 표시(HTTP 200).
import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const dist = "dist";
const indexHtml = join(dist, "index.html");

const menuSrc = readFileSync("src/data/menu.ts", "utf8");
const routes = new Set(
  [...menuSrc.matchAll(/key:\s*"(\/[^"]*)"/g)].map((m) => m[1]),
);
// 각 메뉴의 상위 경로도 포함 (/care, /acne ...)
for (const r of [...routes]) {
  const top = r.split("/").filter(Boolean)[0];
  if (top) routes.add(`/${top}`);
}

let count = 0;
for (const route of routes) {
  const dir = join(dist, ...route.split("/").filter(Boolean));
  mkdirSync(dir, { recursive: true });
  copyFileSync(indexHtml, join(dir, "index.html"));
  count++;
}
copyFileSync(indexHtml, join(dist, "404.html"));
console.log(`spa-fallback: ${count}개 경로 + 404.html 생성`);
