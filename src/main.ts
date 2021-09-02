import cheerio from 'cheerio';
import fetch from 'node-fetch';
import pretty from 'pretty';

async function main(): Promise<void> {
  const res = await fetch('https://www.amazon.co.jp/dp/4314010541');
  const $ = cheerio.load(await res.text());
  console.log(pretty($.html()));
}

main()
  .catch(console.error)
  .finally(() => process.exit(0));
